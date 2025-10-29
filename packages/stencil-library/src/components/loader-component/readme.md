# loader-component

Un componente de carga versátil que soporta múltiples tipos de animaciones, incluyendo loaders predefinidos y animaciones SVG personalizables.

## 🎯 Tipos de Loader Disponibles

### Loaders Predefinidos
- `spinner` - Círculo giratorio (por defecto)
- `dots` - Tres puntos que rebotan
- `pulse` - Círculo que pulsa
- `bars` - Barras que crecen
- `ring` - Anillo giratorio
- `dual-ring` - Doble anillo
- `ellipsis` - Puntos en elipsis
- `ripple` - Ondas concéntricas
- `svg` - SVG personalizable con animaciones

## 🎨 Uso Básico

### Loaders Simples
```html
<!-- Spinner básico -->
<loader-component></loader-component>

<!-- Dots con color personalizado -->
<loader-component type="dots" color="#e74c3c"></loader-component>

<!-- Pulse con tamaño personalizado -->
<loader-component type="pulse" size="80" color="#2ecc71"></loader-component>
```
<!-- svg por defecto -->
 <loader-component type="svg">
      </loader-component>


## 🚀 Animaciones SVG Avanzadas

### SVG con Ruta de Archivo
```html
<loader-component 
  type="svg" 
  svg-path="./assets/my-icon.svg"
  svg-animation="rotate"
  svg-size="100">
</loader-component>
```

### SVG Inline
```html
 <loader-component type="svg"
        svg-path='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>'
        svg-animation="custom" scale-from="0.2" scale-to="2.5" opacity-from="0" opacity-to="0.1" animation-duration="2"
        animation-direction="normal" animation-iterations="6" svg-size="100">
      </loader-component>
```

## 🎛️ Animaciones SVG Predefinidas

### 1. Rotación (`rotate`)
```html
<loader-component 
  type="svg"
  svg-animation="rotate"
  animation-duration="2">
</loader-component>
```

### 2. Escala (`scale`)
```html
<loader-component 
  type="svg"
  svg-animation="scale"
  animation-duration="1.5">
</loader-component>
```

### 3. Pulso con Escala (`pulse-scale`)
```html
<loader-component 
  type="svg"
  svg-animation="pulse-scale"
  animation-duration="2">
</loader-component>
```

### 4. Rebote (`bounce`)
```html
<loader-component 
  type="svg"
  svg-animation="bounce"
  animation-duration="1">
</loader-component>
```

### 5. Traslación (`translate`)
```html
<loader-component 
  type="svg"
  svg-animation="translate"
  translate-x="50"
  translate-y="20"
  animation-direction="alternate">
</loader-component>
```

## 🔧 Animaciones Personalizadas (`custom`)

### Ejemplo: Crecer y Desvanecer
```html
<loader-component 
  type="svg"
  svg-animation="custom"
  scale-from="0.1"
  scale-to="3"
  opacity-from="1"
  opacity-to="0"
  animation-duration="1.5"
  animation-iterations="infinite">
</loader-component>
```

### Ejemplo: Rotación + Escala + Movimiento
```html
<loader-component 
  type="svg"
  svg-animation="custom"
  scale-from="0.8"
  scale-to="1.5"
  rotate-from="0"
  rotate-to="360"
  translate-x="30"
  translate-y="-10"
  opacity-from="0.3"
  opacity-to="1"
  animation-duration="3"
  animation-direction="alternate">
</loader-component>
```

## 📊 Valores para `animation-iterations`

| Valor | Descripción |
|-------|-------------|
| `1` | Se ejecuta una sola vez |
| `2`, `3`, `5` | Número específico de repeticiones |
| `0.5` | Se ejecuta hasta la mitad |
| `1.5` | Una vez y media |
| `infinite` | Se repite infinitamente |

## 📊 Valores para `animation-direction`

| Valor | Descripción |
|-------|-------------|
| `normal` | Animación en dirección normal |
| `reverse` | Animación en dirección inversa |
| `alternate` | Alterna entre normal e inversa |
| `alternate-reverse` | Alterna empezando por inversa |

## 📊 Valores para `animation-easing`

| Valor | Descripción |
|-------|-------------|
| `linear` | Velocidad constante |
| `ease` | Lento-rápido-lento (por defecto CSS) |
| `ease-in` | Empieza lento |
| `ease-out` | Termina lento |
| `ease-in-out` | Lento al inicio y final |
| `cubic-bezier(n,n,n,n)` | Curva personalizada |

## 💡 Casos de Uso Comunes

### 🔄 Loading Continuo
```html
<!-- Para pantallas de carga que duran indefinidamente -->
<loader-component 
  type="svg"
  svg-animation="rotate"
  animation-iterations="infinite"
  animation-duration="1">
</loader-component>
```

### ⚡ Efecto de Aparición
```html
<!-- Para cuando algo aparece en pantalla -->
<loader-component 
  type="svg"
  svg-animation="custom"
  scale-from="0"
  scale-to="1"
  opacity-from="0"
  opacity-to="1"
  animation-iterations="1"
  animation-duration="0.5">
</loader-component>
```

### 💫 Efecto de Pulsación
```html
<!-- Para indicar que algo está "respirando" o activo -->
<loader-component 
  type="svg"
  svg-animation="custom"
  scale-from="0.9"
  scale-to="1.1"
  animation-direction="alternate"
  animation-iterations="infinite"
  animation-duration="1">
</loader-component>
```

### 🌊 Efecto de Onda
```html
<!-- Para simular ondas que se expanden -->
<loader-component 
  type="svg"
  svg-animation="custom"
  scale-from="0.5"
  scale-to="2"
  opacity-from="1"
  opacity-to="0"
  animation-iterations="infinite"
  animation-duration="2">
</loader-component>
```

### 🎯 Efecto de Objetivo/Focus
```html
<!-- Para llamar la atención hacia un elemento -->
<loader-component 
  type="svg"
  svg-animation="custom"
  scale-from="1"
  scale-to="1.3"
  animation-iterations="3"
  animation-direction="alternate"
  animation-duration="0.3">
</loader-component>
```

## 🎨 Consejos de Diseño

### Colores y Temas
```html
<!-- Tema oscuro -->
<loader-component color="#ffffff" text-color="#cccccc">

<!-- Tema de marca -->
<loader-component color="#007bff" text-color="#0056b3">

<!-- Tema de éxito -->
<loader-component color="#28a745" text="¡Cargado!">

<!-- Tema de advertencia -->
<loader-component color="#ffc107" text="Procesando...">
```

### Tamaños Responsivos
```html
<!-- Pequeño (móvil) -->
<loader-component size="30" svg-size="40">

<!-- Mediano (tablet) -->
<loader-component size="50" svg-size="60">

<!-- Grande (desktop) -->
<loader-component size="80" svg-size="100">
```

<!-- Auto Generated Below -->


## Properties

| Property              | Attribute              | Description | Type                                                                                                   | Default         |
| --------------------- | ---------------------- | ----------- | ------------------------------------------------------------------------------------------------------ | --------------- |
| `animationDirection`  | `animation-direction`  |             | `"alternate" \| "alternate-reverse" \| "normal" \| "reverse"`                                          | `'normal'`      |
| `animationDuration`   | `animation-duration`   |             | `number`                                                                                               | `2`             |
| `animationEasing`     | `animation-easing`     |             | `string`                                                                                               | `'ease-in-out'` |
| `animationIterations` | `animation-iterations` |             | `number \| string`                                                                                     | `'infinite'`    |
| `color`               | `color`                |             | `string`                                                                                               | `'#3498db'`     |
| `debug`               | `debug`                |             | `boolean`                                                                                              | `false`         |
| `opacityFrom`         | `opacity-from`         |             | `number`                                                                                               | `1`             |
| `opacityTo`           | `opacity-to`           |             | `number`                                                                                               | `1`             |
| `rotateFrom`          | `rotate-from`          |             | `number`                                                                                               | `0`             |
| `rotateTo`            | `rotate-to`            |             | `number`                                                                                               | `360`           |
| `scaleFrom`           | `scale-from`           |             | `number`                                                                                               | `1`             |
| `scaleTo`             | `scale-to`             |             | `number`                                                                                               | `1.2`           |
| `showText`            | `show-text`            |             | `boolean`                                                                                              | `true`          |
| `size`                | `size`                 |             | `number`                                                                                               | `50`            |
| `speed`               | `speed`                |             | `number`                                                                                               | `1`             |
| `svgAnimation`        | `svg-animation`        |             | `"bounce" \| "bubbles" \| "custom" \| "none" \| "pulse-scale" \| "rotate" \| "scale" \| "translate"`   | `'rotate'`      |
| `svgPath`             | `svg-path`             |             | `string`                                                                                               | `undefined`     |
| `svgSize`             | `svg-size`             |             | `number`                                                                                               | `50`            |
| `text`                | `text`                 |             | `string`                                                                                               | `'Cargando...'` |
| `textColor`           | `text-color`           |             | `string`                                                                                               | `undefined`     |
| `transition`          | `transition`           |             | `string`                                                                                               | `'ease-in-out'` |
| `translateX`          | `translate-x`          |             | `number`                                                                                               | `0`             |
| `translateY`          | `translate-y`          |             | `number`                                                                                               | `0`             |
| `type`                | `type`                 |             | `"bars" \| "dots" \| "dual-ring" \| "ellipsis" \| "pulse" \| "ring" \| "ripple" \| "spinner" \| "svg"` | `'spinner'`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
