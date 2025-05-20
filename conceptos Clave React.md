# Conceptos clave de REACT
## Strict Mode
> Es un modo que va a tratar de controlar la manera en que funcionan los componentes, va a ver que todo funcione correctamente, lo que va a hacer es montar un componente, lo va a montar (renderizarlo), lo va a destruir y lo va a volver a cargar y va a verificar que el componente antes de destruirlo, sea igual al que se vuelve a cargar, esta es la razón por la cual, en varias ocasiones como llamados a api, se ve que se duplican los llamados a la API ( En producción se quita )
## Detección de cambios (SPA)
1. **trigger** -> cualquier tipo de evento que inicia un proceso de render
    * ***Trigger inicial:*** Montar (renderizar por primera vez el componente)
    * ***Trigger Re Render*** Re renderizar algo que ya se habia montado
2. **DOM & DOM Virtual:** El DOM es el mismo de js que el que se encarga de controlar lo que se muestra en el cliente usando el HTML, El dom virtual en cambio es un intermedio, donde estan los cambios que estan esperando ser actualizados, REACT, compara las diferencias y estas son luego, montadas en el DOM y renderizadas
    * Los componente en React son **FUNCIONES**, Un render es ejecutar la funcion para  mostrar graficamente el **COMPONENTE**, deben ser la minima unidad logica posible
    * ***COMMIT:***  Cuando REACT, ya relizo la comparación entre el **DOM** y el **Virtual DOM**, el proceso de aplicar un **CAMBIO** y **RENDERIZARLO** , es un ***COMMIT*** 
    * **JSX & TSX:** Es un tipo de archivo donde se encuetran los componentes de react, el bundler espera que de este archivo se exporte, una funcion que tenga logica interna y regrese tambien HTML con logica inscrita en el interior
3. **Logica al programar**
    * Tener una carpeta ***private*** para los modulos que no son accesibles sin autenticación 
    * Tener una carpeta ***Public*** para los modulos que esten abiertos a todo el publico sin necesidad de autenticarse (por ejemplo, Login o Registro)
    * Tener una carpeta Components para los elementos atomicos y tener una carpeta con cada uno donde haya por lo menos ***CSS*** y ***TSX***
    * Un componente debe ser la minima expresión logica posible, si una logica o alguna parte de un componente no pertenece propiamente al componente (Como el texto de un botón) entonces usar props para pasar los valores desde el padre
    * Si un componente, tiene alguna accion, que desde el diseño requiere que el padre pase por props una funcion para su ejecución desde el hijo, **NO HACERLO**, invirte la logica y que el hijo ***EMITA EL EVENTO*** y sea responsabilidad del padre hacerse cargo de ejecutar dicha logica
    * **Regla del barril** En la carpeta de components o otras carpetas que tengan multiples archivos que deban exportarse, en vez de complicar las exportaciones al tener que indicar la ruta exacta de su ubicacion, en la raiz de la carpeta, por ejempli components, se puede tener un archivo index.ts que se encargue de exportar los diferentes componentes que se tengan y de esa manera, la importación de los componentes sera, mucho más sencilla.
