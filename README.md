# Apuntes de Angular

## Indice

[Instalaciones necesarias y documentación](#instalaciones-necesarias-y-documentación)

[Lo que es Angular](#lo-que-es-angular)

[CLI](#cli)

[Estructura de proyecto](#estructura-de-proyecto)

[Modulos](#modulos)

[Componentes](#componentes)

[Diferencias clave entre Módulo y Componente](#diferencias-clave-entre-módulo-y-componente)

[Enlace de datos](#enlace-de-datos)

[Comunicación entre componentes](#comunicación-entre-componentes)

[Servicios](#servicios)

[Directivas](#directivas)

  * [Tipos de Directivas](#tipos-de-directivas)

[Pipes](#pipes)

[Enrutamiento](#enrutamiento)

[Estructuras de control](#estructuras-de-control)

[Formularios](#formularios)

[Ciclo de vida](#ciclo-de-vida)

[API y HTTP](#API-y-HTTP)

[Signals](#signals)

[Guards](#guards)

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
* ngModule. 
* Forma de organizar y agrupar componentes, directivas, pipes y servicios relacionados en una unidad lógica. Angular siempre tiene al menos un módulo: AppModule, pero puedes (y debes) crear módulos adicionales para mantener tu proyecto escalable y organizado.

**¿Para qué sirven?**
* Separar funcionalidades por dominio (ej: UsuariosModule, AdminModule, etc.).
* Facilitar carga perezosa (lazy loading).
* Reutilizar código en diferentes partes de la app.
* Mejorar el mantenimiento y claridad del código.

### 📊 Tipos de módulos en Angular

| Módulo            | Propósito principal                                  | Importación típica             |
|-------------------|------------------------------------------------------|--------------------------------|
| AppModule         | Módulo raíz de la aplicación                         | Una sola vez en `main.ts`     |
| Feature Module    | Organiza funcionalidad específica                    | En `AppModule` o lazy load     |
| SharedModule      | Reutilización de componentes/pipes/directivas        | En cualquier otro módulo       |
| CoreModule        | Servicios singleton (como autenticación, logger)     | Solo en `AppModule`            |
| RoutingModule     | Define rutas para un módulo                          | Con `RouterModule.forChild()`  |



```shell
ng generate module module-name
ng g m module-name
```

## Componentes

* @Component.
* Similar a controller. 
* Bloque de construccion de creacion de UI.  Ej: header, formulario, pie de pagina, etc.

```shell
ng generate component components/new_component
ng g c components/new_component
```

Se crean 4 archivos:
* component.ts
* HTML
* CSS
* component.spec.ts

## Diferencias clave entre Módulo y Componente

| Aspecto              | Módulo (`@NgModule`)                                 | Componente (`@Component`)                      |
|----------------------|------------------------------------------------------|------------------------------------------------|
| Propósito            | Organiza y agrupa partes de la app                   | Representa una vista o parte de la UI          |
| Decorador            | `@NgModule`                                          | `@Component`                                   |
| Contenido            | Declara componentes, pipes, directivas               | Incluye HTML, lógica TS y estilos CSS          |
| Relación             | Puede contener muchos componentes                    | Pertenece a un único módulo                    |
| Se importa en...     | Otros módulos                                        | Un módulo que lo declara                       |
| Se usa en...         | No se renderiza directamente                         | Se usa como etiqueta HTML (`<app-x>`)          |
| Ejemplo de uso       | `imports: [BrowserModule]`                           | `<app-saludo></app-saludo>` en plantilla       |



## Enlace de datos
* Tambien llamado **Data Binding**
* Permite sincronizar los datos entre el modelo (componentes TypeScript) y la vista (HTML). 
* Esta sincronización puede ser 
    **unidireccional** (del modelo a la vista o viceversa) 
    **bidireccional** lo que permite mantener actualizados los datos en ambos sentidos sin intervención manual

Angular ofrece varios tipos de enlace de datos:

**Interpolación** ({{ }})

Permite mostrar valores desde el componente hacia la vista.

```typescript
// componente.ts
export class AppComponent {
  nombre = 'Juan';
}
```

```html
<!-- componente.html -->
<p>Hola, {{ nombre }}!</p>
```

**Enlace de propiedad** ([property])

Permite enlazar atributos HTML a propiedades del componente.

```typescript
export class AppComponent {
  imagenUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
}
```

```html
<img [src]="imagenUrl">
```

**Enlace de evento** ((event))

Permite ejecutar código del componente en respuesta a eventos del DOM como clics, cambios, teclas, etc.

```typescript
export class AppComponent {
  mostrarMensaje() {
    alert('¡Botón presionado!');
  }
}
```

```html
<button (click)="mostrarMensaje()">Haz clic</button>
```

**Enlace bidireccional** ([(ngModel)])

Sincroniza datos en ambas direcciones. Necesita importar FormsModule.

Importante: No olvides importar FormsModule en tu módulo:

```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],
})
export class AppModule {}
```

```typescript
export class AppComponent {
  nombreUsuario = '';
}
```

```html
<input [(ngModel)]="nombreUsuario" placeholder="Ingresa tu nombre">
<p>Hola, {{ nombreUsuario }}</p>
```

**Metadata (Decoradores)**

Angular utiliza decoradores (metadata) como parte de su sistema de enlace de datos. Algunos importantes:
* @Input() y @Output() para comunicación entre componentes.
* @Component() para definir metadatos de un componente (como el selector, template, estilos, etc.).

## Comunicación entre componentes

En Angular, la aplicación se estructura como un árbol de componentes. Para que estos componentes se comuniquen entre sí, existen varios mecanismos dependiendo de la relación entre ellos:

### Padre → Hijo: usando @Input()

Cuando un componente padre quiere pasar datos a su hijo, se usa el decorador @Input() en el hijo.

```typescript
// hijo.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  template: `<p>Nombre recibido: {{ nombre }}</p>`
})
export class HijoComponent {
  @Input() nombre!: string;
}
```

```html
<!-- padre.component.html -->
<app-hijo [nombre]="'Juanito'"></app-hijo>
```

### Hijo → Padre: usando @Output() y EventEmitter

Cuando un componente hijo quiere enviar datos al padre, se usa @Output() con EventEmitter.

```typescript
// hijo.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  template: `<button (click)="enviar()">Enviar al padre</button>`
})
export class HijoComponent {
  @Output() notificarPadre = new EventEmitter<string>();

  enviar() {
    this.notificarPadre.emit('¡Hola desde el hijo!');
  }
}
```

```html
<!-- padre.component.html -->
<app-hijo (notificarPadre)="recibirMensaje($event)"></app-hijo>
<p>{{ mensajeRecibido }}</p>
```

```typescript
// padre.component.ts
export class PadreComponent {
  mensajeRecibido = '';

  recibirMensaje(mensaje: string) {
    this.mensajeRecibido = mensaje;
  }
}
```

### Comunicación entre hermanos (Siblings): usando un servicio compartido

Cuando los componentes hermanos necesitan comunicarse, se crea un servicio común que maneja el estado o emite eventos.

```typescript
// comunicacion.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ComunicacionService {
  private mensajeSource = new Subject<string>();
  mensaje$ = this.mensajeSource.asObservable();

  enviar(mensaje: string) {
    this.mensajeSource.next(mensaje);
  }
}
```

```typescript
// hermano1.component.ts
constructor(private comunicacion: ComunicacionService) {}

enviarMensaje() {
  this.comunicacion.enviar('Hola hermano 2');
}
```

```typescript
// hermano2.component.ts
mensaje = '';
constructor(private comunicacion: ComunicacionService) {
  this.comunicacion.mensaje$.subscribe(msg => this.mensaje = msg);
}
```

### Usar ViewChild para acceder al hijo directamente

Cuando el padre necesita invocar un método o leer una propiedad de su hijo.

```typescript
// hijo.component.ts
@Component({ ... })
export class HijoComponent {
  saludar() {
    console.log('Hola desde el hijo');
  }
}
```

```typescript
// padre.component.ts
export class PadreComponent implements AfterViewInit {
  @ViewChild(HijoComponent) hijo!: HijoComponent;

  ngAfterViewInit() {
    this.hijo.saludar();
  }
}
```

**Recomendación**
* Para casos simples: @Input() y @Output().
* Para comunicación compleja o entre hermanos: servicio con RxJS.
* Para control directo del hijo: ViewChild.

**Resumen:**


| Relación entre componentes | Método                        | Decoradores / Herramientas       | Dirección de datos       | Cuándo usarlo                                                   |
|----------------------------|-------------------------------|----------------------------------|--------------------------|------------------------------------------------------------------|
| Padre → Hijo               | `@Input()`                    | `@Input()`                       | Unidireccional           | Para pasar datos desde el componente padre al hijo.             |
| Hijo → Padre               | `@Output()` + `EventEmitter`  | `@Output()`, `EventEmitter`      | Unidireccional (evento)  | Para notificar al padre de un evento o enviarle datos.          |
| Hermanos                   | Servicio compartido + `RxJS`  | `Subject`, `Observable`          | Bidireccional            | Para comunicar componentes que no tienen relación directa.      |
| Padre → Hijo (directo)     | `ViewChild`                   | `@ViewChild()`                   | Acceso directo           | Para invocar métodos o acceder a propiedades del hijo.          |
| Sin relación (global)      | State management (opcional)   | NgRx, Signals, BehaviorSubject   | Bidireccional / Reactivo | En apps complejas que necesitan control de estado global.       |


---

## Servicios

Los servicios en Angular son clases que encapsulan lógica reutilizable, como acceso a datos, lógica de negocio o comunicación entre componentes. Se utilizan para mantener los componentes limpios y enfocados únicamente en la presentación.

* Son clases normales de TypeScript decoradas opcionalmente con @Injectable().
* Se inyectan en componentes u otros servicios usando Inyección de Dependencias (DI).
* Se pueden usar para:
    * Compartir datos entre componentes.
    * Realizar llamadas HTTP.
    * Manejar lógica de negocio compleja.
    * Implementar almacenamiento local (state management ligero).

Cómo crear un servicio
```shell
ng generate service services/service_name
ng g s services/service_name
```
Esto crea un archivo service_name.service.ts

### 📊 Tabla comparativa: Tipos de uso de servicios en Angular

| Uso común                  | Herramientas involucradas            | Características principales                                       | Ejemplo práctico                                 |
|---------------------------|--------------------------------------|-------------------------------------------------------------------|--------------------------------------------------|
| Lógica compartida         | Servicio simple                      | Encapsula lógica de negocio para reutilización                   | Validación, cálculos, formateos                 |
| Comunicación entre componentes | `Subject`, `BehaviorSubject`       | Transmite eventos o datos reactivos entre componentes             | Comunicación entre hermanos                     |
| Acceso a APIs             | `HttpClient`, `Observable`           | Llama a servicios web externos (REST, GraphQL, etc.)              | CRUD con APIs REST                              |
| Gestión de estado         | `BehaviorSubject`, NgRx, Signals     | Maneja datos compartidos y cambios de estado en la app            | Carrito de compras, usuario autenticado         |
| Singleton global          | `@Injectable({ providedIn: 'root' })` | Instancia única accesible desde cualquier componente o servicio  | Cualquier tipo de uso general                   |


## Directivas

* Instrucciones que le dicen a Angular cómo manipular el DOM o el comportamiento de los elementos HTML. 
* Angular ofrece directivas estructurales, atributo y también permite crear directivas personalizadas.

### Tipos de Directivas

#### Directivas estructurales

Cambian la estructura del DOM (agregar, eliminar o reemplazar elementos).
📌 Se reconocen por tener el prefijo *.

```html
<!-- *ngIf -->
<p *ngIf="mostrar">Esto se muestra si 'mostrar' es true</p>

<!-- *ngFor -->
<ul>
  <li *ngFor="let item of lista">{{ item }}</li>
</ul>
```

```typescript
lista = ['Angular', 'React', 'Vue'];
mostrar = true;
```

#### Directivas de atributo

Cambian el comportamiento o estilo de un elemento ya existente sin modificar su estructura.

```html
<!-- ngClass aplica clases dinámicamente -->
<div [ngClass]="{ activo: estaActivo }">Texto</div>

<!-- ngStyle aplica estilos en línea -->
<p [ngStyle]="{ color: estaActivo ? 'green' : 'gray' }">Estado</p>
```

```typescript
estaActivo = true;
```

#### Directivas personalizadas

* Puedes crear tus propias directivas para reutilizar comportamientos.
* Las directivas personalizadas más comunes entre los desarrolladores Angular suelen resolver necesidades repetitivas o mejorar la experiencia de usuario en formularios, elementos interactivos y estilos


Ejemplo: resaltar texto al pasar el mouse

```bash
ng generate directive resaltar
```

```typescript
// resaltar.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
```

```html
<p appResaltar>Texto resaltado al pasar el mouse</p>
```

**Resumen**


| Tipo                    | Qué hace                                 | Ejemplos comunes                             | Características principales                            |
|-------------------------|-------------------------------------------|----------------------------------------------|---------------------------------------------------------|
| Estructural             | Agrega o elimina elementos del DOM        | `*ngIf`, `*ngFor`, `*ngSwitchCase`           | Usan `*`, afectan estructura HTML                      |
| De atributo             | Cambian estilo o comportamiento del DOM   | `ngClass`, `ngStyle`, `[class]`, `[style]`   | Se aplican como atributos HTML                         |
| Personalizada           | Comportamiento reutilizable en elementos  | `appResaltar`, `appAutofocus`, etc.          | Se crea con `@Directive` y `HostListener`/`ElementRef` |


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

Manipular el flujo de ejecucion en la aplicación

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

* ngStyle: Permite cambia dinámicamente los estilos de un elemento

* ngContainer: No afecta al DOM, agrupa elementos sin agregar nodos adicionales al arbol DOM

* ngTemplate

* ngPlural


## Formularios

### Basados en plantillas (template-driven)

* Importar FormsModule
* Son más declarativos y se construyen directamente en el HTML. Ideales para formularios simples.

```typescript
import { FormsModule } from '@angular/forms';
```

```html
<form #formulario="ngForm" (ngSubmit)="enviar(formulario)">
  <input type="text" name="nombre" [(ngModel)]="nombre" required>
  <button type="submit">Enviar</button>
</form>
```

### Reactivos (reactive)

Ofrecen un enfoque programático y estructurado. Más apropiados para formularios complejos y dinámicos.

```typescript
import { ReactiveFormsModule } from '@angular/forms';

formulario = new FormGroup({
  nombre: new FormControl('', [Validators.required]),
});
```

```html
<form [formGroup]="formulario" (ngSubmit)="enviar()">
  <input type="text" formControlName="nombre">
  <button type="submit">Enviar</button>
</form>
```

### 📊 Comparativa: Template-driven vs Reactive Forms

| Característica                  | Template-driven                            | Reactivos (reactive)                          |
|--------------------------------|---------------------------------------------|-----------------------------------------------|
| Enfoque                        | Declarativo (HTML)                          | Programático (TypeScript)                     |
| Ideal para                     | Formularios simples                         | Formularios complejos/dinámicos               |
| Módulo necesario               | `FormsModule`                               | `ReactiveFormsModule`                         |
| Enlace de datos                | `[(ngModel)]`                               | `formControlName`, `FormGroup`, `FormControl` |
| Validaciones                   | En HTML                                     | En TypeScript con `Validators`                |
| Control de cambios             | Menos explícito                             | Más preciso                                   |
| Debugging                      | Más difícil                                 | Más claro y rastreable                        |
| Testing                        | Más difícil                                 | Más fácil                                     |


**Diagrama**

<p align="center">
  <img src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-f554-622f-ad62-5e75fa9e946e/raw?se=2025-05-04T22%3A23%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=0a2c573d-66c5-520c-935e-d2a83b0c5630&skoid=e4438ed3-2a6f-4fd3-bf63-222012dc627c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-04T21%3A20%3A04Z&ske=2025-05-05T21%3A20%3A04Z&sks=b&skv=2024-08-04&sig=kjjzJsDrdz6CkdvTXKoCJnaWN564ZDRdqFFLJ6ZFR9w%3D" alt="Diagrama de formularios" width="400">
</p>


## Ciclo de vida

El ciclo de vida de un componente se compone de una serie de eventos que ocurren desde la creación hasta la destrucción del componente

* ngOnChanges: Se dispara cuando los datos de entrada (@Input) del componente cambian.
* ngOnInit: Ocurre después de que Angular ha inicializado todas las propiedades del componente
* ngDoCheck: Se ejecuta durante cada detección de cambios y permite realizar acciones de verificación personalizadas.
* ngAfterContentInit: Ocurre después de que Angular haya proyectado el contenido en el componente.
* ngAfterContentChecked: Se ejecuta después de cada verificación del contenido proyectado.
* ngAfterViewInit: Ocurre después de que Angular haya inicializado las vistas del componente.
* ngAfterViewChecked: Se ejecuta después de cada verificación de las vistas del componente.
* ngOnDestroy: Se dispara justo antes de que Angular destruya el componente


## API y HTTP

**API:**
Las API (Interfaces de Programación de Aplicaciones, por sus siglas en inglés) se utilizan para permitir la comunicación entre diferentes sistemas de software. Son conjuntos de reglas y definiciones que permiten que aplicaciones y servicios se comuniquen entre sí. 

Angular usa HttpClient para hacer peticiones HTTP. Este se importa desde @angular/common/http y se inyecta en los servicios para realizar solicitudes GET, POST, etc.

## Signals

* Disponible a partir de Angular 16
* Nueva forma de gestionar la reactividad
* Permiten declarar valores reactivos simples y realizar seguimiento automático a sus cambios, ofreciendo una alternativa más intuitiva y eficiente a RxJS en muchos casos.
* Es una función que encapsula un valor que puede cambiar con el tiempo y que notifica automáticamente a sus consumidores cuando cambia. Se parece a un estado reactivo en frameworks como SolidJS o Vue.

Ejemplo con uppercase: 

```typescript
import {UpperCasePipe} from '@angular/common';

@Component({
  imports: [UpperCasePipe],
})

export class HeroesComponent {
  ...
}
```

```html
<td>{{item.product | uppercase}}</td>
```

## Guards

* Funciones que protegen rutas en Angular, permitiendo o denegando el acceso a ellas según lógica personalizada
* Se utilizan principalmente en el enrutamiento para controlar el acceso a componentes y módulos.

**¿Para qué sirven los Guards?**
* Restringir el acceso a rutas (por ejemplo, si el usuario no está autenticado).
* Ejecutar lógica antes de entrar o salir de una ruta.
* Cancelar navegación o redirigir a otra página.
* Proteger carga de módulos perezosos (lazy loading).


**Tipos de Guards**
| Tipo de Guard      | ¿Cuándo se ejecuta?                                     | Firma                                    |
| ------------------ | ------------------------------------------------------- | ---------------------------------------- |
| `CanActivate`      | Antes de activar una ruta                               | `canActivate(route, state)`              |
| `CanActivateChild` | Antes de activar una ruta hija                          | `canActivateChild(route, state)`         |
| `CanDeactivate`    | Antes de salir de una ruta                              | `canDeactivate(component, route, state)` |
| `CanLoad`          | Antes de cargar un módulo (lazy)                        | `canLoad(route, segments)`               |
| `CanMatch` (v14+)  | Decide si una ruta debe coincidir (mejor que `CanLoad`) | `canMatch(route, segments)`              |


**Ejemplo: CanActivate guard simple**

```typescript
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
```

Y se aplica en la configuración de rutas:
```typescript
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
];
```

**Tabla comparativa de tipos de Guards**

| Guard              | Momento de ejecución             | Uso principal                                   | Retorno esperado |         |           |
| ------------------ | -------------------------------- | ----------------------------------------------- | ---------------- | ------- | --------- |
| `CanActivate`      | Antes de mostrar la ruta         | Autenticación, autorización                     | \`true           | false   | UrlTree\` |
| `CanActivateChild` | Antes de mostrar rutas hijas     | Protección de sub-rutas                         | \`true           | false   | UrlTree\` |
| `CanDeactivate`    | Antes de salir de una ruta       | Confirmar salida (por ej., cambios sin guardar) | \`true           | false   | UrlTree\` |
| `CanLoad`          | Antes de cargar un módulo (lazy) | Seguridad a nivel de carga                      | \`true           | false\` |           |
| `CanMatch`         | Antes de hacer coincidir la ruta | Control avanzado del enrutamiento               | \`true           | false   | UrlTree\` |


**Buenas prácticas**
* Usa CanActivate para proteger rutas contra usuarios no autenticados.
* Usa CanDeactivate para advertir antes de perder cambios en formularios.
* Usa CanMatch en vez de CanLoad cuando necesitas lógica más avanzada o redirección.
* Asegúrate de proveer los guards como servicios (providedIn: 'root').
* Mantén la lógica de negocio en servicios, no directamente en el guard