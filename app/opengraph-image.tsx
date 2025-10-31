import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

const OpenGraphImage = () =>
  new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f172a',
          color: 'white',
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: -1,
          padding: 64,
        }}
      >
        Laura Bianchi — Coach pour freelances IT
      </div>
    ),
    { ...size },
  );

export default OpenGraphImage;
