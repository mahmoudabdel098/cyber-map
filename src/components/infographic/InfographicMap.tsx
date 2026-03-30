import { useMemo, useState, useCallback } from 'react';
import ReactFlow, {
    type Node,
    type Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { initialNodes, type DomainNodeData } from '../../data/mapData';
import InfographicNode from './InfographicNode';
import NodeDetailsModal from '../NodeDetailsModal';
import './infographic.css';

const nodeTypes = {
    cyber: InfographicNode,
};

const InfographicMap = () => {
    const [selectedNode, setSelectedNode] = useState<Node<DomainNodeData> | null>(null);

    const onNodeClick = useCallback((_: any, node: Node) => {
        setSelectedNode(node as Node<DomainNodeData>);
    }, []);

    const { nodes, edges } = useMemo(() => {
        // Convert radial layout to vertical-tree layout for Infographic look
        const newNodes: Node[] = [];
        const newEdges: Edge[] = [];

        // Root
        const root = initialNodes.find(n => n.id === 'center');
        if (root) {
            newNodes.push({
                ...root,
                position: { x: 0, y: 0 },
            });
        }

        // Categories (Hubs)
        const categories = initialNodes.filter(n => !n.data.isSubNode && n.id !== 'center');
        categories.forEach((cat, i) => {
            const catY = 250 + (i * 800);
            newNodes.push({
                ...cat,
                position: { x: 0, y: catY },
            });

            // Edge from root to hub
            newEdges.push({
                id: `e-root-${cat.id}`,
                source: 'center',
                target: cat.id,
                type: 'step',
                style: { stroke: '#94a3b8', strokeWidth: 3 },
            });

            // Sub-nodes (children)
            const children = initialNodes.filter(n => n.data.category === cat.id && n.data.isSubNode);
            children.forEach((child, j) => {
                const childX = 350 + (j % 2 === 0 ? 0 : 400); // 2-column or list
                const childY = catY + (Math.floor(j / 2) * 120);

                newNodes.push({
                    ...child,
                    position: { x: childX, y: childY },
                });

                newEdges.push({
                    id: `e-${cat.id}-${child.id}`,
                    source: cat.id,
                    target: child.id,
                    type: 'step',
                    style: { stroke: cat.data.color, strokeWidth: 2 },
                });
            });
        });

        return { nodes: newNodes, edges: newEdges };
    }, []);

    return (
        <div className="w-full h-full info-bg overflow-hidden relative">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodeClick={onNodeClick}
                onPaneClick={() => setSelectedNode(null)}
                fitView
                fitViewOptions={{ padding: 0.2 }}
                minZoom={0.01}
                maxZoom={1}
            />
            {/* NODE DETAILS MODAL POPUP */}
            <NodeDetailsModal
                nodeId={selectedNode?.id || null}
                nodeData={selectedNode?.data || null}
                onClose={() => setSelectedNode(null)}
            />
        </div>
    );
};

export default InfographicMap;
