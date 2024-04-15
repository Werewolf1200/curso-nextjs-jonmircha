## Manejo de rutas

    - Se crean en un archivo app.tsx en la carpeta src
    - Al ejecutar npm run dev se crea layout.tsx automaticamente

    - Para crear nuevas rutas se deben crear carpetas con el nombre de la ruta, seguido del archivo page.tsx. en la carpeta app.
    ejemplo: app/contacto/page.tsx

## Rutas Anidadas

Se deben crear Subcarpetas con el nombre de la ruta, seguido del archivo page.tsx. en la carpeta app.
    ejemplo: app/blog/articulo/page.tsx

## Rutas Dinamicas

- Se deben crear Subcarpetas con corchetes [carpeta] para que se puedan leer los parametros, seguido del archivo page.tsx. en la carpeta app.
    ejemplo: app/productos/[producto]/page.tsx

- Se pueden anidar más rutas de manera normal

## Error 404

 Se debe crear un archivo llamado not-found.tsx en la carpeta app y agregar el contenido deaseado
 ej: app/not-found.tsx

 ## Rutas Ocultas

 Sirve para tener información privada
 se debe agregar un _ a la carpeta oculta
 ejemplo: app/_oculta/

## Rutas Agrupadas

Sirve para ocultar un nodo en la URL, se crea una carpeta principal con el nombre entre parentesis (carpeta) y se deben crear Subcarpetas con el nombre de la ruta, seguido del archivo page.tsx. en la carpeta app.
    ejemplo: app/(cuenta)/login/page.tsx

    al desplegar la url aparecera como:
    http://localhost:3000/login

    ## Rutas Agrupadas
## Integrar Estilos CSS
Hay varias formas que se pueden consultar en la documentacion oficial
-Se puede crear un archivo global.css en la carpeta app y invocarlo en el arcvhivo app/layaout.tsx con import "./global.css";

## Layouts
Se pueden crear otros layout.tsx en la carpeta con la ruta a elegir
ejemplo: app/blog/layaout.tsx

## Metadata
export const metadata = {
  title: 'Contacto',
  description: 'Sección contacto',
}

## Metadata Dinamica
Se puede generar metadata dinamicamente asignando los parametros de la URL
Ejemplo en producto:
export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Producto ${params.producto}`
    }
}

## Link
Se debe importar 
     -import Link from "next/link";
Crear link
    - <Link href="/">Home</Link>

## Redireccionar
Redireccionar con useRouter
1. Importar useRouter
  2. Invocar Router
  3. Crear función para redireccionar

Ejemplo en app/contacto.tsx

## Template
Evitar compartir variable de estado o effectos en las rutas con el mismo Layout
- Se debe nombrar al archivo layout.tsx como template.tsx
ejemplo: app/(cuenta)/template.tsx

## Loading
Pagina para mostrar que se esta cargando informacion
- Se debe crear un archivo loading.tsx en la carpeta a elegir
app/productos/loading.tsx

## Rutas Paralelas
Sirven para Insertar modulos independientes en un mismo layout
- Se debe crear una carpeta principal, y añadir las subcarpetas con nombre empezando en @ (@subruta) con su respectivo page.tsx. 
- Se debe crear un layout principal e indicar las rutas creadas
Ver ejemplo en: app/dashboard/layout.tsx

## Componentes
Se pueden implementar componentes React, creando e importandolos en las paginas deseadas
ver ejemplo en: app/dashboard/@analytics.tsx

## API
- Para crear una API, creamos una carpeta api y el archivo route.ts o route.js para alojarla.
- Se deben crear las funciones con el nombre del metodo a utilizar GET/POST/PATCH/DELETE....

ver ejemplo en: app/api/products/route.ts