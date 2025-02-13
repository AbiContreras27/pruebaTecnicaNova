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

## Instalación y Uso
1. Clonar el repositorio.
2. Ubicarse dentro del directorio del proyecto **frontend/vite-project**
3. Ubicarse dentro del directorio del proyecto **backend/list-users**
5. Instalar dependencias con **npm install** en ambos proyectos.
6. Ejecutar el proyecto con **npm run dev** para el frontend.
7. Ejecutar el proyecto con **npm run start** para el backend.


