# Conceptos clave de REACT
## Strict Mode
> Es un modo que va a tratar de controlar la manera en que funcionan los componentes, va a ver que todo funcione correctamente, lo que va a hacer es montar un componente, lo va a montar (renderizarlo), lo va a destruir y lo va a volver a cargar y va a verificar que el componente antes de destruirlo, sea igual al que se vuelve a cargar, esta es la razón por la cual, en varias ocasiones como llamados a api, se ve que se duplican los llamados a la API ( En producción se quita )
## Detección de cambios (SPA)
1. **trigger** -> cualquier tipo de evento que inicia un proceso de render
    * ***Trigger inicial:*** Montar (renderizar por primera vez el componente)
    * ***Trigger Re Render*** Re renderizar algo que ya se habia montado
2. **DOM & DOM Virtual:** El DOM es el mismo de js que el que se encarga de controlar lo que se muestra en el cliente usando el HTML, El dom virtual en cambio es un intermedio, donde estan los cambios que estan esperando ser actualizados, REACT, compara las diferencias y estas son luego, montadas en el DOM y renderizadas
    * Los componente en React son **FUNCIONES**, Un render es ejecutar la funcion para  mostrar graficamente el **COMPONENTE**
    * ***COMMIT:***  Cuando REACT, ya relizo la comparación entre el **DOM** y el **Virtual DOM**, el proceso de aplicar un **CAMBIO** y **RENDERIZARLO** , es un ***COMMIT*** 
