import Head from 'next/head';
import { useState } from 'react';
import WeatherInfo from '../components/WeatherInfo';
import { fetchWeather } from '../services/weatherService';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchWeather(city);
      setWeather(data);
      setError(null);
    } catch (e) {
      setWeather(null);
      setError(e.message);
    }
  };

  return (
    <>
      <Head>
        <title>Aplicación de Clima - Sunset Weather</title>
        <meta name="description" content="Beautiful weather app with sunset colors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 25%, #ff9ff3 50%, #54a0ff 75%, #5f27cd 100%)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        <div style={{
          minHeight: '100vh',
          background: 'rgba(0, 0, 0, 0.1)',
          padding: '40px 20px'
        }}>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h1 style={{
              textAlign: 'center',
              color: '#ffffff',
              fontSize: '2.5rem',
              fontWeight: '300',
              marginBottom: '30px',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
              🌅 Aplicación de Clima
            </h1>
            
            <div style={{
              display: 'flex',
              gap: '15px',
              marginBottom: '30px',
              flexWrap: 'wrap'
            }}>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ingresa una ciudad..."
                style={{
                  flex: '1',
                  minWidth: '200px',
                  padding: '15px 20px',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '16px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#333',
                  outline: 'none',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(5px)'
                }}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button
                onClick={handleSearch}
                style={{
                  padding: '15px 30px',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontWeight: '600',
                  background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
                  color: 'white',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
                  transition: 'all 0.3s ease',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.6)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.4)';
                }}
              >
                🔍 Buscar
              </button>
            </div>

            {error && (
              <div style={{
                background: 'linear-gradient(45deg, #ff6b6b, #ff4757)',
                color: 'white',
                padding: '15px 20px',
                borderRadius: '15px',
                marginBottom: '20px',
                textAlign: 'center',
                fontWeight: '500',
                boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                ⚠️ {error}
              </div>
            )}

            {weather && <WeatherInfo data={weather} />}
          </div>
        </div>
      </div>
    </>
  );
}