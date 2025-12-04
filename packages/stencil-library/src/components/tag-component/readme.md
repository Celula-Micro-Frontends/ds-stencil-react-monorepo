`tag-component`

Componente Tag/Chip personalizable (tamaños, formas, variantes, colores, iconos y eventos). El componente es autosuficiente: maneja interacción, accesibilidad y cierre con animación internamente.

## Características

- Tamaños: `small`, `medium`, `large`
- Formas: `rounded`, `pill`, `square`
- Variantes: `filled`, `outlined`, `ghost`
- Colores personalizables: `bgColor`, `textColor`, `borderColor`
- Iconos (emoji o HTML via `innerHTML`)
- `closable` — botón de cierre con animación y ocultado interno
- Eventos: `tagClick`, `tagClose`, `tagMouseEnter`, `tagMouseLeave`
- Accesible: `role`, `tabindex`, manejo de teclado (Enter / Space), `aria-disabled`

---

## Propiedades

- `text: string` — Texto mostrado (por defecto: `'Tag'`)
- `size: 'small' | 'medium' | 'large'` — Tamaño (por defecto: `'medium'`)
- `shape: 'rounded' | 'pill' | 'square'` — Forma (por defecto: `'rounded'`)
- `variant: 'filled' | 'outlined' | 'ghost'` — Variante visual (por defecto: `'filled'`)
- `bgColor: string` — Color de fondo (por defecto: `#0FC2C0`)
- `textColor: string` — Color del texto (por defecto: `#ffffff`)
- `borderColor: string` — Color del borde (para `outlined`/`ghost`)
- `clickable: boolean` — Hace el tag interactivo y foco con teclado
- `closable: boolean` — Muestra botón de cierre (el componente se oculta con animación al cerrar)
- `disabled: boolean` — Deshabilita interacciones
- `icon: string` — HTML o emoji (usa `innerHTML`)
- `iconPosition: 'left' | 'right'` — Posición del icono
- `width`, `height`, `borderRadius`, `fontSize`, `padding` — Estilos personalizados vía props/variables CSS

---

## Eventos

- `tagClick` — emitido cuando el tag es clickeado (o activado con Enter/Space)
- `tagClose` — emitido cuando el tag se cierra (antes de ocultarlo)
- `tagMouseEnter` — emitido al entrar el ratón
- `tagMouseLeave` — emitido al salir el ratón

> Nota: los eventos se emiten como eventos personalizados del DOM. Puedes suscribirte con `addEventListener` sobre el elemento.

---

## Ejemplos de uso

### 1) HTML básico

```html
<tag-component text="Tag básico"></tag-component>
```

### 2) Colores y variantes

```html
<tag-component text="Filled" variant="filled" bg-color="#845EF7" text-color="#fff"></tag-component>
<tag-component text="Outlined" variant="outlined" border-color="#FF6B6B"></tag-component>
<tag-component text="Ghost" variant="ghost" border-color="#51CF66"></tag-component>
```

### 3) Clickable y escucha de eventos (vanilla JS)

```html
<tag-component text="Click me" clickable id="myTag"></tag-component>
<script>
  const t = document.getElementById('myTag');
  t.addEventListener('tagClick', () => console.log('Tag clicked'));
</script>
```

### 4) Closable — el componente cierra y se oculta por sí mismo

```html
<tag-component text="Closable" closable></tag-component>

<!-- Opcional: escuchar evento para acciones externas -->
<tag-component text="Closable" closable id="closable1"></tag-component>
<script>
  document.getElementById('closable1').addEventListener('tagClose', (e) => {
    console.log('Se emitió tagClose para', e.target);
  });
</script>
```

### 5) Con icono

```html
<tag-component text="Con emoji" icon="🔥" clickable></tag-component>

<!-- usando HTML en icon (innerHTML) -->
<tag-component text="SVG" icon="<svg width='16' height='16' viewBox='0 0 16 16'><circle cx='8' cy='8' r='8' fill='currentColor'/></svg>"></tag-component>
```

### 6) Uso en Stencil (JSX)

```tsx
<tag-component
  text="Stencil Tag"
  clickable
  onTagClick={() => console.log('clicked from Stencil')}
  onTagClose={() => console.log('closed from Stencil')}
/>
```

### 7) Uso en React

Si usas el wrapper generado por Stencil (`@stencil/react-output-target`) puedes usar props `onTagClick`/`onTagClose`.

Si no tienes el wrapper, usa `ref` y `addEventListener`:

```tsx
import { useEffect, useRef } from 'react';

function App() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onClick = () => console.log('tag clicked in React');
    el.addEventListener('tagClick', onClick);
    return () => el.removeEventListener('tagClick', onClick);
  }, []);

  return <tag-component ref={ref} text="React Tag" clickable></tag-component>;
}
```

---

## Accesibilidad

- `role="button"` cuando `clickable`
- `tabindex="0"` para navegación por teclado cuando es clickeable
- Manejo por teclado: Enter / Space activan el `tagClick`
- `aria-disabled` cuando está deshabilitado
- `aria-label` en botón de cierre

---

## Personalización con variables CSS

Puedes personalizar estilos desde CSS global o desde el host:

```css
tag-component {
  --bg-color: #845EF7;
  --text-color: #fff;
  --border-color: #845EF7;
  --border-radius: 12px;
  --padding: 8px 16px;
  --font-size: 14px;
}
```

---

## Notas

- El componente es autosuficiente: no requiere código externo para manejar cierre o animaciones.
- Si quieres comportamiento compartido (p. ej. contador global), suscríbete a los eventos desde el host.
# tag-component Un componente Tag/Chip personalizable que permite mostrar etiquetas con diferentes estilos,
tamaños,
formas y comportamientos interactivos. ## Características - ✅ Tamaños personalizables (small, medium, large) - ✅ Formas personalizables (rounded, pill, square) - ✅ Variantes de estilo (filled, outlined, ghost) - ✅ Colores personalizables (fondo, texto, borde) - ✅ Eventos de interacción (click, close, mouseEnter, mouseLeave) - ✅ Botón de cierre opcional - ✅ Iconos personalizados - ✅ Estado deshabilitado - ✅ Totalmente accesible ## Propiedades | Propiedad | Tipo | Valor por defecto | Descripción | |----------------|-----------------------------------|-------------------|------------------------------------------------| | `text` | `string` | `'Tag'` | Texto del tag | | `size` | `'small'\| 'medium'\| 'large'` | `'medium'` | Tamaño del tag | | `shape` | `'rounded'\| 'pill'\| 'square'` | `'rounded'` | Forma del tag | | `variant` | `'filled'\| 'outlined'\| 'ghost'` | `'filled'` | Variante de estilo | | `bgColor` | `string` | `'#0FC2C0'` | Color de fondo | | `textColor` | `string` | `'#ffffff'` | Color del texto | | `borderColor` | `string` | `'#0FC2C0'` | Color del borde | | `clickable` | `boolean` | `false` | Si el tag es clickeable | | `closable` | `boolean` | `false` | Si el tag tiene botón de cierre | | `disabled` | `boolean` | `false` | Si el tag está deshabilitado | | `icon` | `string` | `undefined` | Icono personalizado (HTML o emoji) | | `iconPosition` | `'left'\| 'right'` | `'left'` | Posición del icono | | `width` | `string` | `undefined` | Ancho personalizado | | `height` | `string` | `undefined` | Altura personalizada | | `borderRadius` | `string` | `undefined` | Radio del borde personalizado | | `fontSize` | `string` | `undefined` | Tamaño de fuente personalizado | | `padding` | `string` | `undefined` | Padding personalizado | ## Eventos | Evento | Descripción | |------------------|--------------------------------------------------| | `tagClick` | Se emite cuando se hace click en el tag | | `tagClose` | Se emite cuando se cierra el tag | | `tagMouseEnter` | Se emite cuando el mouse entra en el tag | | `tagMouseLeave` | Se emite cuando el mouse sale del tag | ## Ejemplos de Uso ### Básico ```html <tag-component text="Tag básico"></tag-component>``` ### Con diferentes tamaños ```html <tag-component text="Pequeño"size="small"></tag-component><tag-component text="Mediano"size="medium"></tag-component><tag-component text="Grande"size="large"></tag-component>``` ### Con diferentes formas ```html <tag-component text="Redondeado"shape="rounded"></tag-component><tag-component text="Píldora"shape="pill"></tag-component><tag-component text="Cuadrado"shape="square"></tag-component>``` ### Con diferentes variantes ```html <tag-component text="Filled"variant="filled"></tag-component><tag-component text="Outlined"variant="outlined"></tag-component><tag-component text="Ghost"variant="ghost"></tag-component>``` ### Con colores personalizados ```html <tag-component text="Personalizado"
bg-color="#FF6B6B"
text-color="#FFFFFF"
border-color="#FF6B6B"></tag-component>``` ### Clickeable con evento ```html <tag-component text="Click me!"
clickable="true"

id="myTag"></tag-component><script>document.getElementById('myTag').addEventListener('tagClick', ()=> {
        console.log('Tag clicked!');
    }

);
</script>``` ### Con botón de cierre ```html <tag-component text="Closable"
closable="true"

id="closableTag"></tag-component><script>document.getElementById('closableTag').addEventListener('tagClose', (e)=> {
        e.target.remove();
    }

);
</script>``` ### Con icono ```html < !-- Con emoji --><tag-component text="Con emoji"icon="🔥"clickable="true"></tag-component>< !-- Con HTML --><tag-component text="Con SVG"
icon="<svg width='16' height='16' viewBox='0 0 16 16'><circle cx='8' cy='8' r='8' fill='currentColor'/></svg>"

icon-position="left"></tag-component>``` ### Deshabilitado ```html <tag-component text="Deshabilitado"disabled="true"clickable="true"></tag-component>``` ### Ejemplo completo con React ```tsx import {
    TagComponent
}

from 'stencil-library';

function App() {
    const handleTagClick=()=> {
        console.log('Tag clicked!');
    }

    ;

    const handleTagClose=()=> {
        console.log('Tag closed!');
    }

    ;

    return (<div> <TagComponent text="React Tag"
        size="medium"
        shape="pill"
        variant="filled"
        bgColor="#0FC2C0"
        textColor="#ffffff"

        clickable= {
            true
        }

        closable= {
            true
        }

        onTagClick= {
            handleTagClick
        }

        onTagClose= {
            handleTagClose
        }

        /> </div>);
}

``` ### Casos de uso comunes #### Tags de categorías ```html <tag-component text="JavaScript"bg-color="#F7DF1E"text-color="#000000"></tag-component><tag-component text="React"bg-color="#61DAFB"text-color="#000000"></tag-component><tag-component text="TypeScript"bg-color="#3178C6"text-color="#FFFFFF"></tag-component>``` #### Tags de estado ```html <tag-component text="Activo"bg-color="#4CAF50"shape="pill"></tag-component><tag-component text="Pendiente"bg-color="#FF9800"shape="pill"></tag-component><tag-component text="Inactivo"bg-color="#F44336"shape="pill"></tag-component>``` #### Tags seleccionables ```html <tag-component text="Opción 1"
variant="outlined"
clickable="true"
id="option1"></tag-component><script>const tag=document.getElementById('option1');

tag.addEventListener('tagClick', ()=> {
        tag.variant=tag.variant==='outlined'? 'filled' : 'outlined';
    }

);

</script>``` ## Accesibilidad El componente incluye características de accesibilidad: - Atributo `role="button"` cuando es clickeable - Atributo `tabindex` para navegación con teclado - Atributo `aria-disabled` cuando está deshabilitado - Atributo `aria-label` en el botón de cierre - Estilos `:focus-visible` para navegación con teclado ## Estilos personalizados Puedes personalizar aún más el componente usando variables CSS: ```css tag-component {
    --bg-color: #custom-color;
    --text-color: #custom-text;
    --border-color: #custom-border;
    --border-radius: 12px;
    --padding: 10px 20px;
    --font-size: 18px;
}

```