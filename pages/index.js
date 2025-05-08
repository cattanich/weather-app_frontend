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
    <div className="container mt-5">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/flatly/bootstrap.min.css"
        />
      </Head>
      <h1>Aplicación de Clima</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Ingresa una ciudad"
        className="form-control"
      />
      <button onClick={handleSearch} className="btn btn-primary">Buscar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && <WeatherInfo data={weather} />}
    </div>
  );
}
