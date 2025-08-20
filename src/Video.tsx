import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from 'remotion';

export const MyVideo: React.FC<{
  title: string;
  backgroundColor: string;
}> = ({ title, backgroundColor }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor, justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ fontSize: 60, color: 'white', opacity }}>
        {title}
      </div>
    </AbsoluteFill>
  );
};
