import { BaseEdge, getBezierPath, type EdgeProps } from 'reactflow';

export default function CustomAnimatedEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const isUnderAttack = data?.isUnderAttack;
  const isPulsing = data?.isPulsing; // A gentle pulse for tracing active paths, optionally

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} style={style} />
      
      {isUnderAttack && (
        <circle r="5" fill="#ef4444" filter="drop-shadow(0 0 4px #ef4444)">
          <animateMotion 
            dur="0.8s" 
            repeatCount="indefinite" 
            path={edgePath} 
          />
        </circle>
      )}

      {isPulsing && !isUnderAttack && (
        <circle r="3" fill="#3b82f6" filter="drop-shadow(0 0 3px #3b82f6)">
          <animateMotion 
            dur="2s" 
            repeatCount="indefinite" 
            path={edgePath} 
          />
        </circle>
      )}
    </>
  );
}
