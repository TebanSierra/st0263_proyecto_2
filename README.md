# Trendi

Repositorio proyecto 2 topicos especiales en telematica 2019-2

## Integrantes

- Mateo Marulanda Cifuentes
- Carlos Daniel Ruiz Gomez
- Esteban Sierra Múnera

## Roles y Responsabilidades

- **Mateo Marulanda Cifuentes - Seguridad:** Implementar políticas de control y seguridad en la aplicación para remover o mitigar vulnerabilidades que afecten el correcto funcionamiento de la aplicación y la integridad de la información, tanto de acceso como la almacenada en la base de datos.

- **Carlos Daniel Ruiz Gómez - Disponibilidad:** Implementar políticas de distribución de tráfico de la aplicación a través de un balanceador de carga e instancias para reducir los tiempos de indisponibilidad del sistema así sea necesario una degradación temporal en el servicio.

- **Esteban Sierra Múnera - Rendimiento:** Monitorear el desempeño y trabajar conjuntamente con seguridad y disponibilidad para mejorar el rendimiento en general de la aplicación bajo escenarios de estrés.

## Arquitectura

La Web App esta desarrollada en MERN (MongoDB, ExpressJS, ReactJS y NodeJS)

![alt text](https://miro.medium.com/max/1300/1*FVtCyRdJ6KOr4YswTtwMeA.jpeg "MERN LOGO")

## API Endpoints

- `/api/post/` GET: Obtener todos los Post
- `/api/post/` POST: Crear un Post
- `/api/post/:trend` GET: Busqueda de Post por nombre del trend
- `/api/post/:id` DELETE: Eliminar Post por id
- `/api/post/:id` PUT: Editar post por id
