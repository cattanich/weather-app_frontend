Desarrollado por Christian Cattani

Aplicación de clima simple usando Next.js. La aplicación debe permitir a los
usuarios buscar el clima actual de cualquier ciudad y mostrar información relevante como
la temperatura, la humedad y una breve descripción del clima. Además, debes escribir
pruebas unitarias para asegurar que las funcionalidades principales funcionen
correctamente.

Requisitos:
1. Interfaz de Usuario:
• Un campo de entrada para que el usuario ingrese el nombre de una ciudad.
• Un botón para buscar el clima de la ciudad ingresada.
• Una sección que muestre la información del clima, incluyendo:
o Temperatura actual.
o Humedad.
o Descripción del clima (por ejemplo, "soleado", "nublado").
2. Funcionalidades:
• Los usuarios deben poder ingresar el nombre de una ciudad y obtener el clima
actual.
• La aplicación debe manejar errores, como cuando se ingresa un nombre de ciudad
inválido.
• Utiliza una API pública de clima, como OpenWeatherMap
(https://openweathermap.org/), para obtener los datos del clima.

utilicé https://wttr.in en su lugar

4. Pruebas Unitarias:
• Prueba que verifica que la aplicación muestra la información del clima
correctamente después de una búsqueda exitosa.
• Prueba que verifica que se maneja correctamente un error cuando se ingresa un
nombre de ciudad inválido.
• Prueba que verifica que el campo de entrada y el botón de búsqueda funcionan
correctamente.
Instrucciones Adicionales:
• Usa [React Testing Library](https://testing-library.com/react) y
[Jest](https://jestjs.io/) para las pruebas unitarias.
• Asegúrate de que el proyecto esté configurado para ejecutar pruebas con Jest y con
un coverage del 80%.
• Proporciona instrucciones claras sobre cómo ejecutar la aplicación y las pruebas.
• Considera el uso de `fetch` o `axios` para realizar solicitudes a la API de clima.
