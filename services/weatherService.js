export async function fetchWeather(city) {
  const response = await fetch(`https://wttr.in/${city}?format=j1`);

  if (!response.ok) {
    throw new Error('Ciudad no encontrada');
  }
  const data = await response.json();

  return {
    name: city,
    main: {
      temp: parseFloat(data.current_condition[0].temp_C),
      humidity: parseInt(data.current_condition[0].humidity, 10),
    },
    weather: [
      {
        description: data.current_condition[0].weatherDesc[0].value,
      },
    ],
  };
}
