# Proyecto: Búsquede de usuarios en lista

## Decisiones de Diseño:

### Composición:
- Se utilizó **Context API** para manejar el estado global de los usuarios y su filtrado, para evitar que las props se pasen inncesariamente a traves de los multiples niveles de componentes.
- La aplicación se divide en componentes reutilizables: **SearchBar**, **UsersList**, **UserDetails** y **Home**.

### Optimización:
- Se usó **useCallback** para evitar recreaciones innecesarias de funciones.

### Accesibilidad:
- Se incluyó atributos **aria-live** en un elemento para mostrar el mensaje de no encontrar dato buscado.
- Se aseguró un **contraste adecuado** en la UI usando colores 
- Se respetaron buenas prácticas de navegación con el teclado para que la aplicación pueda usarse completamente sin un mouse.

---

## Cómo se garantizó una buena UI/UX
- **Búsqueda en tiempo real** sin afectar el rendimiento.
- **Animaciones suaves** para transiciones de usuario seleccionado.
- **Diseño responsive** para una experiencia óptima en distintos dispositivos.

---

## Escalabilidad para Listas Grandes
Para manejar listas de usuarios con un numero de usuarios grande en la lista, se podría implementar lo siguiente:
- **Paginación**: En lugar de cargar toda la lista, usar **limit**  en la API, esto se aplico en un metodo GET del backend para limitar la muestra de resultados en la paginación.
- **Indexación en la base de datos**: Asegurar índices en los campos de búsqueda **fullname y email`**.

---

## Backend:

Se desarrollo con nestjs en una arquitectura modular, basada en modulos donde el modulo **Users** agrupa:
- Controllers
- Services
- Entities
- Dto

1. Se creo un Middleware para observar la ruta y los métodos que se ejecutan en el backend.
2. Se creo un servicio de seeder para cargar usuarios a la **DB** desde un file **json**
3. Se aplicó variables de entorno para brindar seguridad en la conexión de la **DB**
4. Se creador de manera voluntaria los controladores y servicios para tener un CRUD completo el cual se puede probar por un client ya sea **Postman**, **Insomnia** u **otros**
5. Se realizo una pequeña paginación en el backend para mostrar los datos en cualquier client de preferencia.

---

## Instalación y Uso
1. Clonar el repositorio.
2. Ubicarse dentro del directorio del proyecto **frontend/vite-project**
3. Ubicarse dentro del directorio del proyecto **backend/list-users**
5. Instalar dependencias con **npm install** en ambos proyectos.
6. Ejecutar el proyecto con **npm run dev** para el frontend.
7. Ejecutar el proyecto con **npm run start** para el backend.


