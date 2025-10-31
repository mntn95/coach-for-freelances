import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

const TwitterImage = () =>
  new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#111827',
          color: 'white',
          fontSize: 56,
          fontWeight: 700,
          letterSpacing: -1,
          padding: 64,
        }}
      >
        Passez de 5k€ à 10k€+/mois — Coaching Freelance IT
      </div>
    ),
    { ...size },
  );

export default TwitterImage;
