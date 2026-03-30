import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';
import { useLanguage } from '../lib/LanguageContext';
import { cn } from '../lib/utils';
import type { DomainNodeData } from '../data/mapData';

import { nodeTranslations } from '../data/nodeTranslations';

const CyberNode = ({ id, data, selected }: NodeProps<DomainNodeData>) => {
  const { lang } = useLanguage();
  const rawLabel = typeof data.label === 'string' 
    ? data.label 
    : (data.label?.[lang] || data.label?.en || 'Node');
  const label = typeof rawLabel === 'string' 
    ? (nodeTranslations[id as keyof typeof nodeTranslations]?.[lang as 'it'|'en'] || rawLabel) 
    : 'Node';

  const isRoot = id === 'center';
  const isCategory = !isRoot && !data.isSubNode;
  const color = data.color || '#94a3b8';

  // ROOT NODE: Bold, central glowing presence 
  // No motion.div here to prevent any issues where ReactFlow unmounts/remounts and hides it
  if (isRoot) {
    return (
      <div
        className={cn(
          "relative flex items-center justify-center min-w-[260px] md:min-w-[380px] px-8 py-6 md:px-12 md:py-10 rounded-3xl z-50",
          "bg-white border-[3px] md:border-[4px] border-slate-300 shadow-2xl transition-all duration-300 cursor-pointer",
          selected && "border-blue-500 ring-4 ring-blue-200 scale-[1.03]"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white rounded-[20px] pointer-events-none" />
        <h1 className="text-xl md:text-3xl font-black text-slate-900 tracking-[0.1em] md:tracking-[0.2em] z-10 uppercase drop-shadow-md text-center">
          {label}
        </h1>

        {/* Handles for Root (Center) connecting out to L/R */}
        <Handle type="source" position={Position.Left} id="l" className="opacity-0 w-1 h-1" />
        <Handle type="source" position={Position.Right} id="r" className="opacity-0 w-1 h-1" />
      </div>
    );
  }

  // CATEGORY NODE: Main branches of the mental map
  if (isCategory) {
    return (
      <div className={cn(
        "relative flex flex-col justify-center px-4 py-4 md:px-6 md:py-5 rounded-2xl z-40 w-max min-w-[200px] md:min-w-[280px] whitespace-nowrap",
        "bg-white border-[2px] md:border-[3px] border-slate-200 shadow-xl transition-all duration-300",
        selected && "border-slate-400 shadow-2xl ring-4 ring-slate-100 scale-[1.02]"
      )}>
        <div className="absolute top-0 left-6 right-6 md:left-8 md:right-8 h-[4px] md:h-[6px] rounded-b-lg" style={{ backgroundColor: color, opacity: 0.9 }} />

        <div className="flex items-center gap-3 md:gap-4 mb-1 md:mb-2">
          <div className="w-4 h-4 md:w-5 md:h-5 rounded-full shadow-sm" style={{ backgroundColor: color }} />
          <h2 className="text-sm md:text-xl font-bold text-slate-800 tracking-wider uppercase drop-shadow-sm">
            {label}
          </h2>
        </div>

        {/* Handles for incoming from Root and outgoing to SubNodes */}
        <Handle type="target" position={Position.Left} id="l" className="opacity-0" />
        <Handle type="target" position={Position.Right} id="r" className="opacity-0" />
        <Handle type="source" position={Position.Left} id="sl" className="opacity-0" />
        <Handle type="source" position={Position.Right} id="sr" className="opacity-0" />
      </div>
    );
  }

  // SUB NODE: Leaves of the mental map
  const underAttackStyles = "border-rose-500 bg-rose-50 ring-4 ring-rose-500/30 shadow-lg scale-[1.05] shadow-rose-500/20";
  const hoverStyles = "hover:shadow-xl hover:border-slate-400 cursor-pointer";
  const defaultBg = "bg-white border-2 border-slate-300 shadow-sm";
  const selectedStyles = "border-slate-500 bg-slate-50 ring-2 ring-slate-200 shadow-lg scale-[1.02]";

  return (
    <div className={cn(
      "relative flex items-center px-4 py-3 md:px-6 md:py-4 rounded-xl z-30 w-max min-w-[160px] md:min-w-[220px] whitespace-nowrap transition-all duration-500",
      data.isUnderAttack ? underAttackStyles : `${defaultBg} ${hoverStyles}`,
      selected && !data.isUnderAttack && selectedStyles
    )}>
      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full mr-3 md:mr-5 shrink-0 shadow-sm" style={{ backgroundColor: color }} />
      <span className="text-[11px] md:text-base font-bold text-slate-800 tracking-wide uppercase">
        {label}
      </span>

      {/* Handles for incoming from Category and outgoing to children */}
      <Handle type="target" position={Position.Left} id="l" className="opacity-0" />
      <Handle type="target" position={Position.Right} id="r" className="opacity-0" />
      <Handle type="source" position={Position.Left} id="sl" className="opacity-0" />
      <Handle type="source" position={Position.Right} id="sr" className="opacity-0" />
    </div>
  );
};

export default memo(CyberNode);
