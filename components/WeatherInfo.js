export default function WeatherInfo({ data }) {
  return (
    <div>
      <h2>Clima en {data.name}</h2>
      <p>Temperatura: {data.main.temp} °C</p>
      <p>Humedad: {data.main.humidity}%</p>
      <p>Descripción: {data.weather[0].description}</p>
    </div>
  );
}
