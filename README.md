# Apuntes de Angular

## Indice

[Instalaciones necesarias y documentación](#instalaciones-necesarias-y-documentación)

[Lo que es Angular](#lo-que-es-angular)

[CLI](#cli)

[Estructura de proyecto](#estructura-de-proyecto)

[Modulos](#modulos)

[Componentes](#componentes)

[Enlace de datos](#enlace-de-datos)

[Comunicación entre componentes](#comunicación-entre-componentes)

[Servicios](#servicios)

[Directivas](#directivas)

[Pipes](#pipes)

[Enrutamiento](#enrutamiento)

[Estructuras de control](#estructuras-de-control)

[Formularios](#formularios)

---

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


## Lo que es Angular
Framework de diseño de aplicaciones y de una sola pagina eficientes

**MVC**
* Modelo: Datos y logica de negocio(clases TS, propiedades y métodos)
* Vista: Interfaz de usuario (HTML y CSS)
* Controlador: Controla el flujo entre la vista y el modelo. Maneja interaciones del usuario como clics de boton o eventos de entrada.


## CLI
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

## Estructura de proyecto
[README](https://baguilar6174.medium.com/estructura-base-para-cualquier-proyecto-de-angular-6a035a27bfcf)


## Modulos
ngModule. Mecanismo de organización y encapsulación que se utiliza para agrupar componentes, directivas, pipes (filtros), servicios, etc. Estos ayudan a dividir una aplicación en partes mas pequeñas y  manejables, faciltando el desarrollo, mantenibilidad y escabilidad.

```shell
ng generate module module-name
ng g m module-name
```

## Componentes

Similar a controller. Bloque de construccion de creacion de UI.  Ej: header, formulario, pie de pagina, etc.
```shell
ng generate component components/new_component
ng g c components/new_component
```
Se crean 4 archivos:
* component.ts
* HTML
* CSS
* component.spec.ts


## Enlace de datos
Binding. Capacidad de conectar los datos entre el modelo y la vista, sin intervension manual
Ej: {{value}}, [property] = "value", (event), [(ng-model)]

Estos son reactivos usando observables en tiempo real


Metadata:


## Comunicación entre componentes

Los componentes se comunican mediante vinvulacion de propiedades de entrada y salida.

## Servicios

Clase TS que se usa para organizar y compartir logica, datos o funcionalidades entre diferentes componentes.

Facilita la comunicacion entre componentes

```shell
ng generate service services/service_name
ng g s services/service_name
```

**Inyeccion de dependencias:**
* declaracion de variable en constructor de clase componente con _ inicial
* 


## Directivas

Instrucciones en HTML que extienden o personalizan funcionalidades del DOM.

```shell
ng generate directive directive_name
ng g d directive
```

## Pipes

* Filtros. 
* Formatean y transformar datos en la vista de una aplicación. 
* Los pipes son funciones que toman un valor de entrada y lo procesan para proporcionar una representación modificada o formateada en la interfaz de usuario
* se aplican utilizando el símbolo de barra vertical |
* Ej: formateo de fechas, números, monedas, texto en mayúsculas o minúsculas, entre otros
* Puedes usar pipes integrados: DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, entre otros
* Y crear tus propios pipes

```shell
ng generate pipe pipe_name
ng g p pipe_name
```

## Enrutamiento
* Routing
* Capacidad de dirigir el flujo de navegación de una aplicación web sin recargar la pagina
* RouterModule que permite la configuración y gestión del enrutamiento en una aplicación Angular


## Estructuras de control

Manupular el flujo de ejecucion en la aplicación

* ngIf
* ngFor

```typescript
<tr *ngFor="let usuario of listUsuario">
    <td>{{usuario.id}}</td>
    <td>{{usuario.username}}</td>
    <td>{{usuario.email}}</td>
    <td>{{usuario.telefono}}</td>
    <td>{{usuario.password}}</td>
</tr>
```

* ngSwitch: Muestra un bloque de contenido según el valor de una expresión

* ngClass: Permite cambiar dinamicamentelas clases de un elemento

* ngStyle: Permite cambia dianmicamnete los estilos de un elemento

* ngContainer: No afecta al DOM, agrupa elementos sin agregar nodos adicionales al arbol DOM

* ngTemplate

* ngPlural


## Formularios

### Basados en plantillas (template-driven)
* Importar FormsModule

### Reactivos (reactive)