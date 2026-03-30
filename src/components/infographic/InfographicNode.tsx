import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../lib/LanguageContext';

import { nodeTranslations } from '../../data/nodeTranslations';

const InfographicNode = ({ data, selected }: NodeProps) => {
    const { lang } = useLanguage();
    const isRoot = data.id === 'center';
    const rawLabel = typeof data.label === 'string' 
        ? data.label 
        : (data.label?.[lang] || data.label?.en || 'Unknown');
    const labelText = typeof rawLabel === 'string' && !isRoot
        ? (nodeTranslations[data.id as keyof typeof nodeTranslations]?.[lang as 'it'|'en'] || rawLabel) 
        : (isRoot ? (lang === 'it' ? 'AREE DELLA CYBER SECURITY' : 'CYBER SECURITY DOMAINS') : 'Unknown');
        
    const isHub = data.shape === 'circle';

    if (isRoot) {
        return (
            <div className="bg-white border-4 border-gray-900 p-8 min-w-[300px] text-center shadow-2xl">
                <h1 className="text-4xl font-black uppercase tracking-tighter leading-none">{labelText}</h1>
                <div className="h-1 w-20 bg-gray-900 mx-auto mt-4" />
                <Handle type="source" position={Position.Bottom} className="opacity-0" />
            </div>
        );
    }

    if (isHub) {
        return (
            <div
                className={cn(
                    "px-6 py-4 rounded-xl text-white font-black uppercase tracking-widest text-lg shadow-lg transition-transform",
                    selected ? "scale-110 ring-4 ring-offset-4 ring-gray-900" : ""
                )}
                style={{ backgroundColor: data.color }}
            >
                <Handle type="target" position={Position.Top} className="opacity-0" />
                {labelText}
                <Handle type="source" position={Position.Bottom} className="opacity-0" />
                <Handle type="source" position={Position.Right} className="opacity-0" />
            </div>
        );
    }

    return (
        <div
            className={cn(
                "bg-white border-2 px-6 py-2 rounded-full shadow-sm text-sm font-bold text-gray-800 transition-all hover:shadow-md",
                selected ? "border-gray-900 scale-105" : "border-gray-200"
            )}
            style={{ borderLeftColor: data.color, borderLeftWidth: '6px' }}
        >
            <Handle type="target" position={Position.Left} className="opacity-0" />
            {labelText}
            <Handle type="source" position={Position.Right} className="opacity-0" />
        </div>
    );
};

export default memo(InfographicNode);
