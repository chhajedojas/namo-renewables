import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Namo Renewables'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#f8fafc',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderTop: '20px solid #14532d',
          borderBottom: '20px solid #14532d',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1
              style={{
                fontSize: 90,
                fontWeight: 800,
                color: '#14532d',
                letterSpacing: '-0.02em',
                margin: 0,
                padding: 0,
                fontFamily: 'serif',
              }}
            >
              Namo Renewables
            </h1>
            <p
              style={{
                fontSize: 40,
                color: '#166534',
                marginTop: 20,
                fontWeight: 600,
                fontFamily: 'sans-serif',
              }}
            >
              Premium Biomass Briquettes
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
