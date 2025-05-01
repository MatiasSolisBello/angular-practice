# Apuntes de Angular

## Instalaciones necesarias y documentación
* Chrome
* VS Code
* GIT
* Node.js (LTS)
* [Angular Snippets by John Papa (Extensión de VS Code)](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
* [Angular Material](https://material.angular.io/)
* [Angular DevTools (Extensión de Chrome)](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh)

La versión de Angular 16 no soporta la última versión LTS de NODE. Acá hay 2 opciones:
* Instalamos una versión de Node.js más vieja
* Angular 17 y usamos --no-standalone a las creaciones de proyectos

```shell
ng new nombre-de-la-aplicación --no-standalone
```
El --no-standalone te instalará el app.module.ts y el ngmodule al igual que se usaba en Angular 16 para atrás

Sino podemos usar Angular 16 con NODE 18!


## Teoria

**¿Qué es Angular?**
Framework de diseño de aplicaciones y de una sola pagina eficientes

**MVC**
* Modelo: Datos y logica de negocio(clases TS, propiedades y métodos)
* Vista: Interfaz de usuario (HTML y CSS)
* Controlador: Controla el flujo entre la vista y el modelo. Maneja interaciones del usuario como clics de boton o eventos de entrada.


**CLI de Angular**
Herramienta de linea de comandos con herramientas prediseñadas .

Instalar ultima versión o versión 16: 
```shell
npm install -g @angular/cli
npm install -g @angular/cli@16.2.10
```

Crear aplicación (usa guiones y evita mayusculas)
```shell
ng new new_project
```

**Estructura de proyecto**
[README](https://baguilar6174.medium.com/estructura-base-para-cualquier-proyecto-de-angular-6a035a27bfcf)

**Modulos (ngModule)**
Mecanismo de organización y encapsulación que se utiliza para agrupar componentes, directivas, pipes (filtros), servicios, etc. Estos ayudan a dividir una aplicación en partes mas pequeñas y  manejables, faciltando el desarrollo, mantenibilidad y escabilidad.

```shell
ng generate module module-name
ng g m module-name
```
**Componentes (Controller)**
Bloque de construccion de creacion de UI.  Ej: header, formulario, pie de pagina, etc.
```shell
ng generate component components/new_component
ng g c components/new_component
```
Se crean 4 archivos:
* component.ts
* HTML
* CSS
* component.spec.ts


**Enlace de datos (Binding)**
Capacidad de conectar los datos entre el modelo y la vista, sin intervension manual
Ej: {{value}}, [property] = "value", (event), [(ng-model)]

Estos son reactivos usando observables en tiempo real


Metadata:


**Comunicación entre componentes**
Los componentes se comunican mediante vinvulacion de propiedades de entrada y salida.

**Servicios**
Clase TS que se usa para organizar y compartir logica, datos o funcionalidades entre diferentes componentes.

Facilita la comunicacion entre componentes













---

Crear servicio
ng g s services/service_name