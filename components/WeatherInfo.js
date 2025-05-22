export default function WeatherInfo({ data }) {
  const getWeatherIcon = (description) => {
    const desc = description.toLowerCase();
    if (desc.includes('clear') || desc.includes('sunny')) return '☀️';
    if (desc.includes('cloud')) return '☁️';
    if (desc.includes('rain')) return '🌧️';
    if (desc.includes('snow')) return '❄️';
    if (desc.includes('storm')) return '⛈️';
    if (desc.includes('mist') || desc.includes('fog')) return '🌫️';
    return '🌤️';
  };

  const getTemperatureColor = (temp) => {
    if (temp >= 30) return '#ff6b6b';
    if (temp >= 20) return '#feca57';
    if (temp >= 10) return '#48dbfb';
    return '#0abde3';
  };

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      padding: '30px',
      marginTop: '20px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{
        color: '#ffffff',
        fontSize: '1.8rem',
        fontWeight: '300',
        textAlign: 'center',
        marginBottom: '25px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
      }}>
        📍 Clima en {data.name}
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '20px'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '15px',
          padding: '20px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div style={{
            fontSize: '3rem',
            color: getTemperatureColor(data.main.temp),
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            marginBottom: '5px'
          }}>
            {data.main.temp}°C
          </div>
          <div style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.9rem',
            fontWeight: '500'
          }}>
            🌡️ Temperatura
          </div>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '15px',
          padding: '20px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div style={{
            fontSize: '2.5rem',
            color: '#48dbfb',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            marginBottom: '5px'
          }}>
            {data.main.humidity}%
          </div>
          <div style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.9rem',
            fontWeight: '500'
          }}>
            💧 Humedad
          </div>
        </div>
      </div>

      <div style={{
        background: 'linear-gradient(45deg, rgba(255, 107, 107, 0.2), rgba(254, 202, 87, 0.2))',
        borderRadius: '15px',
        padding: '25px',
        textAlign: 'center',
        border: '1px solid rgba(255, 255, 255, 0.3)'
      }}>
        <div style={{
          fontSize: '4rem',
          marginBottom: '10px'
        }}>
          {getWeatherIcon(data.weather[0].description)}
        </div>
        <div style={{
          color: '#ffffff',
          fontSize: '1.2rem',
          fontWeight: '500',
          textTransform: 'capitalize',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
        }}>
          {data.weather[0].description}
        </div>
      </div>
    </div>
  );
}