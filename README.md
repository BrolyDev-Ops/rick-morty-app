# Rick and Morty Characters Viewer

Este proyecto es una aplicación web sencilla que utiliza la API pública de Rick and Morty para mostrar una lista de personajes con funcionalidad de paginación. A continuación, te proporciono una descripción detallada del código y cómo utilizar la aplicación.

## Estructura del Proyecto

El proyecto tiene varios archivos principales:

index.js: Es el punto de inicio de la aplicación. Aquí se renderiza el componente principal App utilizando React.

### App.js:
Este es el componente principal que maneja la lógica de la aplicación, incluida la llamada a la API, el estado de los personajes y la información de paginación.

### Paginacion.js: 
Un componente que muestra botones de paginación (Previous y Next) para permitir la navegación entre las páginas de personajes.

### CharacterList.js: 
Presenta la lista de personajes obtenidos de la API, mostrando su imagen, nombre, especie y ubicación.

### Navbar.js: 
Un componente simple de barra de navegación que muestra el título de la aplicación.

## Cómo Utilizar
### Instalación de Dependencias:
![image](https://github.com/BrolyDev-Ops/rick-morty-app/assets/112824352/6b21e4fa-d4f4-4fc2-9e5d-5d3354dea7d3)

### Ejecutar la Aplicación:
![image](https://github.com/BrolyDev-Ops/rick-morty-app/assets/112824352/92b369ca-99f6-4141-b1b4-6e37d1664b7b)

### Interacción con la Aplicación:
#### La página mostrará una lista de personajes de Rick and Morty.
#### Utiliza los botones "Previous" y "Next" para navegar entre las páginas de personajes.
![image](https://github.com/BrolyDev-Ops/rick-morty-app/assets/112824352/d9209dce-b364-4df8-9408-310e5ebce6c0)
![image](https://github.com/BrolyDev-Ops/rick-morty-app/assets/112824352/4fecd068-f9d6-46cc-b15d-48bf07259260)
![image](https://github.com/BrolyDev-Ops/rick-morty-app/assets/112824352/76a66f57-7704-4942-a102-dde05ac85b91)



## Estructura del Código
### App.js: 
Este componente principal realiza llamadas a la API y gestiona el estado de los personajes y la información de paginación. Los botones de "Previous" y "Next" llaman a funciones que actualizan la lista de personajes según la URL proporcionada por la API.

### Paginacion.js: 
Un componente de paginación simple que muestra botones "Previous" y "Next". Los botones se habilitan o deshabilitan según si existen URLs previas o siguientes.

### CharacterList.js: 
Componente que recibe la lista de personajes y los muestra en tarjetas con información básica.

### Navbar.js: 
Un componente de barra de navegación simple con el título de la aplicación.
