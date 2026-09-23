import { ImageResponse } from 'next/og'

export const alt = 'Roshan, Run of show'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0A0A0A',
          padding: '60px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', color: '#E9A23B', fontSize: 18, letterSpacing: '0.1em' }}>
          CUE 00 · 00:00
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              color: '#F5EFE0',
              letterSpacing: '0.02em',
              textTransform: 'uppercase' as const,
            }}
          >
            ROSHAN
          </div>
          <div
            style={{
              fontSize: 28,
              color: 'rgba(245,239,224,0.48)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase' as const,
              marginTop: 12,
            }}
          >
            RUN OF SHOW
          </div>
        </div>
        <div style={{ display: 'flex', color: 'rgba(245,239,224,0.48)', fontSize: 16, letterSpacing: '0.05em' }}>
          Bengaluru · about 4 minutes
        </div>
      </div>
    ),
    { ...size }
  )
}
