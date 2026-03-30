import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Target, Network, HelpCircle, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { nodeDescriptions } from '../data/nodeDescriptions';
import { nodeRelations } from '../data/nodeRelations';
import { nodeTranslations } from '../data/nodeTranslations';
import { type DomainNodeData } from '../data/mapData';
import { nodeQuizzes } from '../data/nodeQuizzes';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

interface NodeDetailsModalProps {
  nodeId: string | null;
  nodeData: DomainNodeData | null;
  onClose: () => void;
  onRelatedClick?: (nodeId: string) => void;
}

export default function NodeDetailsModal({ nodeId, nodeData, onClose, onRelatedClick }: NodeDetailsModalProps) {
  const { lang } = useLanguage();
  const [cachedData, setCachedData] = useState<{ id: string, data: DomainNodeData } | null>(null);
  const [quizResult, setQuizResult] = useState<{ selected: number; isCorrect: boolean } | null>(null);

  useEffect(() => {
    if (nodeId && nodeData && nodeId !== 'center') {
      setCachedData({ id: nodeId, data: nodeData });
      setQuizResult(null); // Reset quiz when node changes
    }
  }, [nodeId, nodeData]);

  const isOpen = !!nodeId && !!nodeData && nodeId !== 'center';
  const activeId = isOpen ? nodeId : cachedData?.id;
  const activeData = isOpen ? nodeData : cachedData?.data;

  // We can safely return null if there's no cached data yet and it's not open.
  if (!activeId || !activeData) {
    // but we still want AnimatePresence ready
    return <AnimatePresence />;
  }

  const descData = nodeDescriptions[activeId] || {
    whatItIs: {
      it: "Descrizione non disponibile per questo nodo.",
      en: "Description not available for this node."
    },
    utility: {
      it: "Utilità in corso di definizione.",
      en: "Utility is being defined."
    }
  };

  const color = activeData.color || '#3b82f6';
  const label = activeData.label?.[lang] || activeData.label?.en;
  const categoryLabel = activeData.category 
    ? (activeData.category.charAt(0).toUpperCase() + activeData.category.slice(1)).replace('-', ' ') 
    : 'Domain';

  const relatedIds = nodeRelations[activeId] || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 pointer-events-none flex justify-center md:justify-end items-center p-2 md:p-8">
          <motion.div
            key="drawer"
            initial={{ x: "110%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "110%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 32 }}
            className="relative w-[calc(100vw-32px)] md:w-full md:max-w-[380px] h-full max-h-[85vh] md:max-h-[90vh] bg-white/90 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-white/50 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden pointer-events-auto flex flex-col"
          >
            {/* Header Line - Now a top bar for floating look */}
            <div className="absolute top-0 left-0 right-0 h-2" style={{ backgroundColor: color }} />

            <div className="flex-1 flex flex-col overflow-y-auto scrollbar-hide">
              <div className="p-6 md:p-8 flex-1 flex flex-col">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-slate-100 text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors"
                title={lang === 'it' ? 'Chiudi pannello' : 'Close panel'}
              >
                <X size={20} strokeWidth={2.5} />
              </button>

              <div className="mb-8 mt-4 md:mt-2 pr-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}80` }} />
                  <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-slate-400 uppercase">
                    {categoryLabel}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
                  {label}
                </h2>
              </div>

              <div className="space-y-6 flex-1">
                {/* What it is */}
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl relative overflow-hidden h-full max-h-min">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <ShieldCheck size={100} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="flex items-center gap-2 text-sm font-black text-slate-800 uppercase tracking-wider mb-3">
                      <ShieldCheck size={18} style={{ color }} />
                      {lang === 'it' ? 'Che cos\'è' : 'What it is'}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {descData.whatItIs[lang] || descData.whatItIs.en}
                    </p>
                  </div>
                </div>

                {/* Utility */}
                <div className="bg-white border border-slate-200 p-5 rounded-2xl relative overflow-hidden shadow-sm h-full max-h-min">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Target size={100} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="flex items-center gap-2 text-sm font-black text-slate-800 uppercase tracking-wider mb-3">
                      <Target size={18} style={{ color }} />
                      {lang === 'it' ? 'A cosa serve (Utilità)' : 'Utility'}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed font-medium">
                      {descData.utility[lang] || descData.utility.en}
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Concepts (Rabbit-Hole) */}
              {relatedIds.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                    <Network size={16} /> 
                    {lang === 'it' ? 'Concetti Correlati' : 'Related Concepts'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedIds.map(rid => {
                      const tr = (nodeTranslations as any)[rid];
                      const rLabel = tr ? (tr[lang] || tr.en) : rid.replace('-', ' ');
                      return (
                        <button
                          key={rid}
                          onClick={() => onRelatedClick?.(rid)}
                          className="bg-slate-100 hover:bg-slate-800 hover:text-white border border-slate-200 text-slate-600 px-3 py-2 rounded-xl text-xs font-bold tracking-widest shadow-sm hover:shadow-md transition-all active:scale-95 text-left"
                        >
                          {rLabel}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Knowledge Check (Quiz) - NEW SECTION */}
              {activeId && nodeQuizzes[activeId] && (
                <div className="mt-10 pt-8 border-t border-slate-200">
                  <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-[2rem] relative overflow-hidden">
                    <div className="absolute -top-6 -right-6 p-4 opacity-5 text-blue-600">
                      <HelpCircle size={120} />
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-4">
                        <HelpCircle size={16} />
                        {lang === 'it' ? 'Knowledge Check' : 'Knowledge Check'}
                      </h3>
                      
                      <p className="text-sm font-bold text-slate-800 mb-4 leading-snug">
                        {nodeQuizzes[activeId].question[lang]}
                      </p>
                      
                      <div className="space-y-2">
                        {nodeQuizzes[activeId].options[lang].map((opt, idx) => {
                          const isSelected = quizResult?.selected === idx;
                          const isCorrect = nodeQuizzes[activeId!].correctIndex === idx;
                          
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                if (!quizResult) {
                                  setQuizResult({ selected: idx, isCorrect });
                                }
                              }}
                              disabled={!!quizResult}
                              className={cn(
                                "w-full text-left p-3 rounded-xl text-xs font-medium transition-all border",
                                !quizResult ? "bg-white border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 text-slate-600" : 
                                isCorrect ? "bg-green-50 border-green-200 text-green-700 pointer-events-none" :
                                isSelected ? "bg-red-50 border-red-200 text-red-700" : "bg-slate-50 border-slate-100 text-slate-400 grayscale opacity-40"
                              )}
                            >
                              <div className="flex items-center gap-2">
                                {quizResult && isCorrect && <CheckCircle size={14} />}
                                {quizResult && isSelected && !isCorrect && <AlertCircle size={14} />}
                                {opt}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      
                      {quizResult && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm"
                        >
                          <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic">
                            <span className="font-black text-slate-800 uppercase not-italic mr-1">
                              {lang === 'it' ? 'Spiegazione:' : 'Explanation:'}
                            </span>
                            {nodeQuizzes[activeId].explanation[lang]}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Cyber Pro Tip - NEW SECTION */}
              <div className="mt-8 mb-12 p-6 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                  <Lightbulb size={120} />
                </div>
                <div className="relative z-10">
                  <h3 className="flex items-center gap-2 text-[10px] font-black text-amber-400 uppercase tracking-[0.2em] mb-3">
                    <Lightbulb size={14} />
                    {lang === 'it' ? 'Cyber Pro Tip' : 'Cyber Pro Tip'}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-slate-200">
                    {lang === 'it' 
                      ? "La sicurezza è un processo, non un prodotto. Nessuna singola difesa è impenetrabile: la strategia vincente è la 'Difesa in Profondità' (Defense-in-Depth)."
                      : "Security is a process, not a product. No single defense is impenetrable: the winning strategy is 'Defense-in-Depth'."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
