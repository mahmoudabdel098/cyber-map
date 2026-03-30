import { useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  Controls,
  useNodesState,
  useEdgesState,
  type Node,
  useReactFlow,
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  MiniMap,
  getNodesBounds,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { toPng } from 'html-to-image';
import { initialNodes, initialEdges, type DomainNodeData } from '../data/mapData';
import nodeTypesList from './CyberNode';
import { Search, X, RotateCcw, Menu, Download, ShieldAlert,
  AlertTriangle, ChevronLeft, ChevronRight, ShieldCheck,
  Package, Users, Globe, Bug
} from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { cn } from '../lib/utils';
import NodeDetailsModal from './NodeDetailsModal';
import { nodeTranslations } from '../data/nodeTranslations';
import { nodeDescriptions } from '../data/nodeDescriptions';
import { threatScenarios } from '../data/threatScenarios';
import CustomAnimatedEdge from './CustomAnimatedEdge';

const ICON_MAP: Record<string, any> = {
  "alert-triangle": AlertTriangle,
  "package": Package,
  "users": Users,
  "globe": Globe,
  "bug": Bug
};

const nodeTypes = { cyber: nodeTypesList };
const edgeTypes = { custom: CustomAnimatedEdge };

// Conceptual clusters mapping ensuring all Cyber map nodes are visible
const CLUSTERS = [
  { id: 'arc', label: { en: 'Architecture & Frameworks', it: 'Architettura & Frameworks' }, color: '#fcd34d', domains: ['architecture', 'frameworks'] },
  { id: 'ops', label: { en: 'Operations & Edu', it: 'Operations & Educazione' }, color: '#fef08a', domains: ['operations', 'career', 'education', 'physical-iot'] },
  { id: 'appsec', label: { en: 'Application Security', it: 'Sicurezza Applicativa' }, color: '#fb923c', domains: ['appsec'] },
  { id: 'risk', label: { en: 'Risk & ERM', it: 'Rischio & ERM' }, color: '#fca5a5', domains: ['risk-assessment', 'erm'] },
  { id: 'gov', label: { en: 'Governance & Threat', it: 'Governance & Minacce' }, color: '#86efac', domains: ['governance', 'threat-intel'] },
];

const MapInner = () => {
  const { lang, setLang } = useLanguage();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node<DomainNodeData> | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCluster, setActiveCluster] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeThreatId, setActiveThreatId] = useState<string | null>(null);
  const [threatStep, setThreatStep] = useState(0);
  const reactFlowInstance = useReactFlow();

  const activeThreat = activeThreatId ? threatScenarios.find(t => t.id === activeThreatId) : null;
  const threatNodes = activeThreat ? new Set(activeThreat.steps[threatStep].nodes) : new Set<string>();

  const startThreat = (id: string) => {
    setActiveCluster(null);
    setSearchQuery('');
    setSelectedNode(null);
    setThreatStep(0);
    setActiveThreatId(id);
    if (window.innerWidth < 768) setIsMobileMenuOpen(false);
  };

  const onDownload = useCallback(() => {
    // CRYSTAL CLEAR CAPTURE TECHNIQUE: Capture at scale(1) regardless of current view
    const nodes = reactFlowInstance.getNodes();
    if (nodes.length === 0) return;

    const nodesBounds = getNodesBounds(nodes);
    
    // We calculate the exact dimensions required to fit all nodes at scale 1
    const padding = 150;
    const targetWidth = nodesBounds.width + (padding * 2);
    const targetHeight = nodesBounds.height + (padding * 2);

    const elem = document.querySelector('.react-flow__viewport') as HTMLElement;
    if (elem) {
      // We momentarily apply a style that forces 1:1 scale for the capture
      toPng(elem, {
        backgroundColor: '#f8fafc',
        width: targetWidth,
        height: targetHeight,
        style: {
          width: `${targetWidth}px`,
          height: `${targetHeight}px`,
          // IMPORTANT: translate to -bounds.x/y to center all nodes in the canvas at scale(1)
          transform: `translate(${-nodesBounds.x + padding}px, ${-nodesBounds.y + padding}px) scale(1)`,
          imageRendering: 'crisp-edges',
        },
        pixelRatio: 2, // 2x is plenty when source is 1:1 scale
        cacheBust: true,
      }).then((dataUrl) => {
        const link = document.createElement('a');
        const date = new Date().toISOString().split('T')[0];
        link.download = `Cyber_Map_HD_${date}.png`;
        link.href = dataUrl;
        link.click();
      }).catch(err => {
        console.error('Error downloading map:', err);
      });
    }
  }, [reactFlowInstance]);

  const getTranslatedLabel = useCallback((id: string, objLabel: any) => {
    const rawLabel = typeof objLabel === 'string' ? objLabel : (objLabel?.[lang] || objLabel?.en || '');
    return typeof rawLabel === 'string'
      ? (nodeTranslations[id as keyof typeof nodeTranslations]?.[lang as 'it'|'en'] || rawLabel)
      : rawLabel;
  }, [lang]);

  const getPathToCenter = useCallback((targetId: string | null) => {
    const path = new Set<string>();
    if (!targetId) return path;

    let currentId = targetId;
    path.add(currentId);

    // Trace back through initialEdges to find the route to 'center'
    while (currentId && currentId !== 'center') {
      const edgeToParent = initialEdges.find(e => e.target === currentId);
      if (edgeToParent) {
        path.add(edgeToParent.id);
        path.add(edgeToParent.source);
        currentId = edgeToParent.source;
      } else {
        break; // Reached root or disconnected
      }
    }
    return path;
  }, []);

  // Highlight effect: On load, set center with a light zoom
  useEffect(() => {
    const timer = setTimeout(() => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      if (isMobile) {
        reactFlowInstance.setCenter(0, 0, { zoom: 0.28, duration: 1200 });
      } else {
        reactFlowInstance.setCenter(0, 0, { zoom: 0.45, duration: 1200 });
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [reactFlowInstance]);

  // -- DYNAMIC ZOOM FOR THREATS --
  useEffect(() => {
    if (!activeThreatId) return;
    const threat = threatScenarios.find(t => t.id === activeThreatId);
    if (!threat) return;
    
    const nodeIds = threat.steps[threatStep]?.nodes || [];
    if (nodeIds.length === 0) return;

    // Small timeout to allow nodes state to flush
    const t = setTimeout(() => {
      const rNodes = reactFlowInstance.getNodes().filter(n => nodeIds.includes(n.id));
      if (rNodes.length > 0) {
        const bounds = getNodesBounds(rNodes);
        reactFlowInstance.fitBounds(bounds, {
          padding: 0.6,
          duration: 1000,
        });
      }
    }, 150);
    return () => clearTimeout(t);
  }, [activeThreatId, threatStep, reactFlowInstance]);

  // --- FILTERS & INTERACTIVITY ---
  useEffect(() => {
    const activePath = getPathToCenter(selectedNode ? selectedNode.id : null);
    const isTracing = activePath.size > 0;
    
    // Evaluate Search
    const query = searchQuery.toLowerCase().trim();
    let searchMatchedNodeIds = new Set<string>();
    let searchPaths = new Set<string>();
    let threatPaths = new Set<string>();

    if (query) {
      initialNodes.forEach(node => {
        if (node.id === 'center') return;
        const d = node.data as DomainNodeData;
        const label = getTranslatedLabel(node.id, d.label).toLowerCase();
        
        // Search in descriptions
        const descObj = (nodeDescriptions as any)[node.id];
        let descText = "";
        if (descObj) {
           const l = lang as 'it' | 'en';
           descText = `${descObj.whatItIs[l]} ${descObj.utility[l]}`.toLowerCase();
        }

        if (label.includes(query) || descText.includes(query)) {
          searchMatchedNodeIds.add(node.id);
          const path = getPathToCenter(node.id);
          path.forEach(id => searchPaths.add(id));
        }
      });
    }

    if (activeThreat) {
      threatNodes.forEach(tId => {
        const path = getPathToCenter(tId);
        path.forEach(p => threatPaths.add(p));
      });
    }

    setNodes(initialNodes.map(node => {
      const d = node.data as DomainNodeData;
      const cluster = CLUSTERS.find(c => c.id === activeCluster);
      const isGroup = node.type === 'blueprintGroup';
      // Safety check for group IDs
      const groupId = isGroup ? node.id.replace('group-', '') : '';

      const inCluster = !activeCluster || (cluster && (cluster.domains.includes(d.category!) || cluster.domains.includes(groupId) || cluster.domains.includes(node.id)));

      let visible = false;
      let isExactMatch = false;

      if (node.id === 'center') {
        visible = true;
      } else if (activeThreat) {
        visible = true; // All visible but dim in threat mode
      } else if (query) {
        if (searchMatchedNodeIds.has(node.id)) {
          visible = true;
          isExactMatch = true;
        } else if (searchPaths.has(node.id)) {
          visible = true;
        }
      } else {
        visible = !!inCluster;
      }

      // Tracing highlighting logic
      let nodeOpacity = visible ? 1 : 0.08;
      
      if (activeThreat) {
        if (threatNodes.has(node.id) || node.id === 'center') {
           nodeOpacity = 1;
        } else if (threatPaths.has(node.id)) {
           nodeOpacity = 0.6; // Keep ancestors visible to connect the tree!
        } else {
           nodeOpacity = 0.05;
        }
      } else if (visible && isTracing) {
        nodeOpacity = activePath.has(node.id) ? 1 : 0.2;
      } else if (visible && query) {
        // Spotlight search exact matches
        if (isExactMatch || node.id === 'center') {
          nodeOpacity = 1;
        } else {
          nodeOpacity = 0.5; // Dim the path connectors
        }
      }

      return {
        ...node,
        data: { ...d, isUnderAttack: !!activeThreat && threatNodes.has(node.id) },
        hidden: !visible,
        style: { ...node.style, opacity: nodeOpacity, transition: 'opacity 0.4s ease' }
      };
    }));

    setEdges(initialEdges.map(edge => {
      const sourceNode = initialNodes.find(n => n.id === edge.source);
      const targetNode = initialNodes.find(n => n.id === edge.target);

      const cluster = CLUSTERS.find(c => c.id === activeCluster);
      
      let visible = false;
      
      if (activeThreat) {
         visible = true;
      } else if (query) {
         // Show edge if it belongs to the upward tree of a matched node
         visible = searchPaths.has(edge.id);
      } else {
         const sourceInCluster = !activeCluster || (cluster && (cluster.domains.includes(sourceNode?.data.category!) || cluster.domains.includes(sourceNode?.id!)));
         const targetInCluster = !activeCluster || (cluster && (cluster.domains.includes(targetNode?.data.category!) || cluster.domains.includes(targetNode?.id!)));
         const sourceVisible = !!sourceInCluster || sourceNode?.id === 'center';
         const targetVisible = !!targetInCluster || targetNode?.id === 'center';
         visible = sourceVisible && targetVisible;
      }

      // Tracing highlighting logic for Edges
      const inPath = activePath.has(edge.id);
      let edgeOpacity = visible ? 1 : 0;
      let strokeWidth = edge.style?.strokeWidth || 1;
      let strokeColor = edge.style?.stroke;
      let zIndex = 0;

      if (activeThreat) {
        const isTarget = threatNodes.has(targetNode?.id || '');
        const isPath = threatPaths.has(edge.id);

        if (isTarget) {
          edgeOpacity = 0.8;
          strokeColor = '#f43f5e'; // rose-500
          strokeWidth = 3;
          zIndex = 10;
        } else if (isPath) {
          edgeOpacity = 0.4;
          strokeColor = '#f43f5e'; // Highlight ancestry faintly
          strokeWidth = 2;
          zIndex = 5;
        } else {
          edgeOpacity = 0.05;
        }
      } else if (visible && isTracing) {
        if (inPath) {
          edgeOpacity = 1;
          strokeWidth = 5; // Emphasize edge thickness
          zIndex = 10;
          // Retrieve actual target node color to shine brightest
          const tColor = (targetNode?.data as DomainNodeData)?.color;
          if (tColor) strokeColor = tColor;
        } else {
          edgeOpacity = 0.15; // Dim heavily when tracing
        }
      } else if (visible && query) {
        // Highlighting for search graph context
        edgeOpacity = searchPaths.has(edge.id) ? 0.6 : 0.1;
      }

      const isThreatActive = Boolean(activeThreat && threatNodes.has(targetNode?.id || ''));
      const isThreatPathActive = Boolean(activeThreat && threatPaths.has(edge.id));
      const isPathActive = Boolean(inPath || (query && searchPaths.has(edge.id)));

      return {
        ...edge,
        type: 'custom',
        hidden: !visible,
        zIndex,
        animated: isThreatActive || isThreatPathActive || isPathActive, // Animate active path organically!
        data: {
          ...edge.data,
          isUnderAttack: isThreatActive || isThreatPathActive, // Send payload down all paths!
          isPulsing: !isThreatActive && !isThreatPathActive && isPathActive, // Only pulse blue if not under attack
        },
        style: {
          ...edge.style,
          transition: 'all 0.5s ease',
          opacity: edgeOpacity,
          strokeWidth,
          stroke: strokeColor,
          animationDuration: isThreatActive ? '0.5s' : '1s'
        }
      };
    }));
  }, [searchQuery, activeCluster, lang, selectedNode, activeThreatId, threatStep, getPathToCenter, setNodes, setEdges, activeThreat]);

  const onNodeClick = useCallback((_: any, node: Node) => {
    setSelectedNode(node as Node<DomainNodeData>);
    reactFlowInstance.setCenter(node.position.x, node.position.y, { zoom: 1.1, duration: 600 });
  }, [reactFlowInstance]);

  const recenter = () => {
    setSelectedNode(null);
    setSearchQuery('');
    setActiveCluster(null);

    // Dynamic Recenter
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile) {
      reactFlowInstance.setCenter(0, 0, { zoom: 0.28, duration: 800 });
    } else {
      reactFlowInstance.setCenter(0, 0, { zoom: 0.45, duration: 800 });
    }
  };

  return (
    // Light Background
    <div className="w-full h-full bg-[#f8fafc] text-slate-900 font-sans overflow-hidden relative">
      <Background variant={BackgroundVariant.Dots} color="#cbd5e1" gap={30} size={1.5} className="opacity-80" />

      {/* MOBILE MENU TOGGLE */}
      <div className="md:hidden absolute top-5 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white/95 backdrop-blur-3xl p-3 rounded-xl border border-slate-200 shadow-xl text-slate-800 transition-transform active:scale-90"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* DASHBOARD (Left) - Light Version */}
      <header className={cn(
        "absolute z-40 md:z-30 pointer-events-none transition-all duration-300 ease-in-out",
        "top-20 left-4 md:top-8 md:left-8",
        isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 md:opacity-100 md:translate-y-0 pointer-events-none md:pointer-events-auto"
      )}>
        <div className="pointer-events-auto bg-white/95 backdrop-blur-3xl border border-slate-200/80 p-4 md:p-5 rounded-[2rem] w-[calc(100vw-32px)] md:w-[290px] shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex flex-col overflow-y-auto max-h-[85vh] scrollbar-hide">
          {/* Header Compact */}
          <div className="flex items-center gap-3 mb-4 shrink-0 px-1">
            <div className="text-blue-600 bg-blue-50 p-2.5 rounded-xl border border-blue-100 flex-shrink-0">
              <ShieldCheck size={18} strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-800 leading-none mb-1">Cyber_Map</h1>
              <span className="text-[8px] font-bold text-slate-400 tracking-widest uppercase flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" /> Live Intel
              </span>
            </div>
          </div>

          <div className="flex gap-1.5 mb-4 shrink-0">
            <div className="relative flex-1 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={13} />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={lang === 'it' ? 'Cerca...' : 'Search...'}
                className="w-full bg-slate-50/50 border border-slate-200/60 rounded-xl pl-8 pr-8 py-2 text-[10px] text-slate-800 focus:outline-none focus:bg-white transition-all font-medium"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 p-1">
                   <X size={12} />
                </button>
              )}
            </div>
            <button onClick={() => setLang(l => l === 'en' ? 'it' : 'en')} className="w-10 h-8 flex items-center justify-center border border-slate-200 bg-white text-[9px] font-black text-slate-500 hover:text-blue-600 rounded-xl transition-all active:scale-95">
              {lang === 'it' ? 'EN' : 'IT'}
            </button>
            <button onClick={recenter} className="w-9 h-8 flex items-center justify-center border border-slate-200 bg-white text-slate-400 hover:text-slate-900 rounded-xl transition-all active:scale-95">
              <RotateCcw size={14} strokeWidth={2.5} />
            </button>
            <button onClick={onDownload} className="w-9 h-8 flex items-center justify-center border border-blue-100 bg-blue-50 text-blue-500 hover:bg-blue-600 hover:text-white rounded-xl transition-all active:scale-95">
              <Download size={14} strokeWidth={2.5} />
            </button>
          </div>

          <div className="space-y-1 shrink-0 px-0.5">
            <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2 ml-1">
              <div className="w-1 h-1 rounded-full bg-blue-400" /> {lang === 'it' ? 'Categorie' : 'Categories'}
            </h3>
            <div className="space-y-0.5">
              {CLUSTERS.map(cluster => (
                <button
                  key={cluster.id}
                  onClick={() => setActiveCluster(cluster.id === activeCluster ? null : cluster.id)}
                  disabled={!!activeThreat}
                  className={cn(
                    "w-full px-3 md:py-1.5 py-3 text-[9px] font-black uppercase tracking-[0.1em] rounded-xl transition-all flex items-center justify-between group touch-manipulation",
                    activeCluster === cluster.id
                      ? "bg-slate-900 text-white shadow-lg"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-30"
                  )}
                >
                  <span className="truncate pr-2">{cluster.label[lang] || cluster.label.en}</span>
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ 
                      backgroundColor: cluster.color, 
                      opacity: activeCluster === cluster.id ? 1 : 0.6 
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 mb-1 shrink-0 px-0.5">
            <h3 className="text-[9px] font-black text-rose-500 uppercase tracking-widest mb-2 flex items-center gap-2 ml-1">
              <ShieldAlert size={12} strokeWidth={2.5} /> {lang === 'it' ? 'Simulazioni' : 'Threats'}
            </h3>
            <div className="grid grid-cols-2 gap-1.5">
              {threatScenarios.map(threat => {
                const Icon = ICON_MAP[threat.iconName] || AlertTriangle;
                return (
                  <button
                    key={threat.id}
                    onClick={() => startThreat(threat.id)}
                    className={cn(
                      "flex items-center gap-2 md:px-2.5 px-3 md:py-2 py-3 text-[10px] md:text-[8px] font-black uppercase tracking-tight rounded-xl transition-all border shrink-0 group relative overflow-hidden touch-manipulation",
                      activeThreatId === threat.id
                        ? "bg-rose-500 text-white border-rose-500 shadow-md"
                        : "bg-white text-rose-600 border-rose-50 hover:bg-rose-50/50 hover:border-rose-100"
                    )}
                  >
                    <Icon size={12} strokeWidth={2.5} className="shrink-0" />
                    <span className="truncate text-left leading-tight">{threat.name[lang as 'it'|'en']}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </header>

      {/* REACT FLOW */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onPaneClick={() => setSelectedNode(null)}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        minZoom={0.05}
        maxZoom={3}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={true}
        panOnDrag={true}
        panOnScroll={true}
        zoomOnScroll={false}
        zoomOnPinch={true}
        selectionOnDrag={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      >
        <Controls className="!bg-white !border-slate-200 !shadow-xl !rounded-xl !p-1 !m-2 md:!p-2 md:!m-10" />
        <MiniMap 
          nodeColor={(n: any) => n.data?.color || '#cbd5e1'}
          nodeStrokeWidth={3}
          zoomable
          pannable
          className="hidden md:block !bg-white !border-slate-200 !rounded-2xl shadow-xl !w-48 !h-36 !bottom-10 !right-10 overflow-hidden"
          maskColor="rgba(248, 250, 252, 0.75)"
        />
      </ReactFlow>

      {/* NODE DETAILS MODAL POPUP */}
      <NodeDetailsModal
        nodeId={selectedNode?.id || null}
        nodeData={selectedNode?.data || null}
        onClose={() => setSelectedNode(null)}
        onRelatedClick={(rId) => {
          const targetNode = initialNodes.find(n => n.id === rId);
          if (targetNode) {
            setSelectedNode(targetNode as Node<DomainNodeData>);
            reactFlowInstance.setCenter(targetNode.position.x, targetNode.position.y, { zoom: 1.1, duration: 800 });
          }
        }}
      />

      {/* THREAT SIMULATOR PANEL */}
      {activeThreat && (
        <div className="absolute top-20 md:top-10 right-4 md:right-10 w-[calc(100vw-32px)] md:w-[380px] z-[60] bg-slate-900/95 backdrop-blur-3xl border border-slate-700 shadow-2xl rounded-3xl overflow-y-auto max-h-[85vh] animate-in fade-in slide-in-from-right-8 flex flex-col pointer-events-auto custom-scrollbar">
          <div className="bg-rose-500/10 border-b border-rose-500/20 px-5 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-rose-500/20 text-rose-400 rounded-lg shadow-inner">
                 <ShieldAlert size={16} />
              </div>
              <h3 className="text-rose-400 font-bold tracking-widest uppercase text-xs">{activeThreat.name[lang as 'it'|'en']}</h3>
            </div>
            <button onClick={() => setActiveThreatId(null)} className="text-slate-400 hover:text-white p-1.5 hover:bg-slate-800 rounded-lg transition-colors">
              <X size={18} />
            </button>
          </div>
          <div className="p-5">
            <div className="flex gap-1.5 mb-5">
              {activeThreat.steps.map((_, i) => (
                <div key={i} className={cn("h-1 flex-1 rounded-full transition-all duration-300", i <= threatStep ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]" : "bg-slate-700")} />
              ))}
            </div>
            <h4 className="text-white font-black text-sm uppercase tracking-wide mb-2">{activeThreat.steps[threatStep].title[lang as 'it'|'en']}</h4>
            <p className="text-slate-300 text-xs leading-relaxed mb-6 font-medium">
              {activeThreat.steps[threatStep].desc[lang as 'it'|'en']}
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/50">
              <button 
                onClick={() => setThreatStep(s => Math.max(0, s - 1))}
                disabled={threatStep === 0}
                className="px-3 py-2 text-xs font-bold text-slate-300 disabled:opacity-30 disabled:hover:bg-transparent flex items-center gap-1.5 hover:bg-slate-800 rounded-lg transition-colors"
                >
                <ChevronLeft size={14} /> {lang === 'it' ? 'Indietro' : 'Prev'}
              </button>
              <button 
                onClick={() => {
                   if (threatStep < activeThreat.steps.length - 1) setThreatStep(s => s + 1);
                   else setActiveThreatId(null);
                }}
                className="px-5 py-2 text-xs font-bold bg-rose-500 text-white rounded-lg flex items-center gap-1.5 hover:bg-rose-600 transition-all shadow-lg shadow-rose-500/20 active:scale-95"
                >
                {threatStep === activeThreat.steps.length - 1 
                   ? (lang === 'it' ? 'Termina Simulazione' : 'End Simulation') 
                   : (lang === 'it' ? 'Prossima Fase' : 'Next Phase')} 
                {threatStep < activeThreat.steps.length - 1 && <ChevronRight size={14} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CyberMap = () => (
  <ReactFlowProvider>
    <MapInner />
  </ReactFlowProvider>
);

export default CyberMap;
