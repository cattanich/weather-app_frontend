import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../pages/index';

jest.mock('../services/weatherService', () => ({
  fetchWeather: jest.fn((city) => {
    if (city === 'Quito') {
      return Promise.resolve({
        name: 'Quito',
        main: { temp: 20, humidity: 70 },
        weather: [{ description: 'nublado' }],
      });
    } else {
      return Promise.reject(new Error('Ciudad no encontrada'));
    }
  }),
}));

test('muestra clima correctamente tras una búsqueda', async () => {
  render(<Home />);
  fireEvent.change(screen.getByPlaceholderText(/ciudad/i), {
    target: { value: 'Quito' },
  });
  fireEvent.click(screen.getByText(/buscar/i));
  await waitFor(() => {
    expect(screen.getByText(/Quito/)).toBeInTheDocument();
    expect(screen.getByText(/Temperatura/)).toBeInTheDocument();
  });
});

test('muestra mensaje de error si ciudad no existe', async () => {
  render(<Home />);
  fireEvent.change(screen.getByPlaceholderText(/ciudad/i), {
    target: { value: 'NoExiste' },
  });
  fireEvent.click(screen.getByText(/buscar/i));
  await waitFor(() => {
    expect(screen.getByText(/Ciudad no encontrada/)).toBeInTheDocument();
  });
});
