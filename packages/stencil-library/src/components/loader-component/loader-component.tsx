import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'loader-component',
  styleUrl: 'loader-component.css',
  shadow: true,
})
export class LoaderComponent {
  @Prop() type: 'spinner' | 'dots' | 'pulse' | 'bars' | 'ring' | 'dual-ring' | 'ellipsis' | 'ripple' | 'svg' = 'spinner';

  @Prop() color: string = '#3498db';

  @Prop() text: string = 'Cargando...';

  @Prop() size: number = 50;

  @Prop() speed: number = 1;

  @Prop() transition: string = 'ease-in-out';

  @Prop() textColor: string;

  @Prop() showText: boolean = true;
  @Prop() debug: boolean = false;

  // Nuevas propiedades para SVG
  @Prop() svgPath: string; // Ruta o contenido del SVG

  @Prop() svgAnimation: 'rotate' | 'scale' | 'pulse-scale' | 'bounce' | 'translate' | 'custom' | "bubbles" | 'none' = 'rotate';

  @Prop() animationDuration: number = 2;

  @Prop() svgSize: number = 50;

  // Propiedades para animaciones personalizadas
  @Prop() scaleFrom: number = 1; // Escala inicial
  @Prop() scaleTo: number = 1.2; // Escala final
  @Prop() translateX: number = 0; // Traslación en X (en px)
  @Prop() translateY: number = 0; // Traslación en Y (en px)
  @Prop() rotateFrom: number = 0; // Rotación inicial (en grados)
  @Prop() rotateTo: number = 360; // Rotación final (en grados)
  @Prop() opacityFrom: number = 1; // Opacidad inicial
  @Prop() opacityTo: number = 1; // Opacidad final
  @Prop() animationEasing: string = 'ease-in-out'; // Función de timing
  @Prop() animationDirection: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse' = 'normal';
  @Prop() animationIterations: number | string | 'infinite' = 'infinite';


  private getSVGContent(): any {
    if (!this.svgPath) return null;

    // Si es una URL o ruta
    if (this.svgPath.startsWith('http') || this.svgPath.endsWith('.svg')) {
      return (
        <img
          src={this.svgPath}
          alt="Loading"
          class="svg-loader"
          style={{
            width: `${this.svgSize}px`,
            height: `${this.svgSize}px`
          }}
        />
      );
    }

    // Si es contenido SVG inline
    if (this.svgPath.includes('<svg')) {
      return (
        <div
          class="svg-loader"
          innerHTML={this.svgPath}
          style={{
            width: `${this.svgSize}px`,
            height: `${this.svgSize}px`
          }}
        />
      );
    }

    // SVG por defecto si no se proporciona uno válido
    return (
      <svg
        class="svg-loader"
        width={this.svgSize}
        height={this.svgSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke={this.color}
      >
        <path d="M21 12a9 9 0 11-6.219-8.56" />
      </svg>
    );
  }

  private getCustomAnimationStyle(): any {
    // Crear animación CSS personalizada dinámicamente
    const animationName = `custom-animation-${Math.random().toString(36).substr(2, 9)}`;

    // Crear keyframes dinámicos
    const keyframes = `
      @keyframes ${animationName} {
        0% {
          transform: scale(${this.scaleFrom})
                     translate(0, 0)
                     rotate(${this.rotateFrom}deg);
          opacity: ${this.opacityFrom};
        }
        100% {
          transform: scale(${this.scaleTo})
                     translate(${this.translateX}px, ${this.translateY}px)
                     rotate(${this.rotateTo}deg);
          opacity: ${this.opacityTo};
        }
      }
    `;

    // Inyectar los keyframes en el shadow DOM
    if (!document.getElementById(animationName)) {
      const style = document.createElement('style');
      style.id = animationName;
      style.textContent = keyframes;
      document.head.appendChild(style);
    }

    return {
      animation: `${animationName} ${this.animationDuration}s ${this.animationEasing} ${this.animationIterations} ${this.animationDirection}`
    };
  }

  private getLoaderHTML(): any {
    const loaderTemplates = {
      spinner: <div class="spinner"></div>,
      dots: (
        <div class="dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      ),
      pulse: <div class="pulse"></div>,
      bars: (
        <div class="bars">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      ),
      ring: <div class="ring"></div>,
      'dual-ring': <div class="dual-ring"></div>,
      ellipsis: (
        <div class="ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ),
      ripple: (
        <div class="ripple">
          <div></div>
          <div></div>
        </div>
      ),
      bubbles: (() => {
        const aspectRatio = 522 / 584; // Aspect ratio del SVG
        const width = this.svgSize; // Usamos `svgSize` como el ancho base
        const height = this.svgSize / aspectRatio; // Calculamos el alto basado en el aspect ratio
        return (
          <svg
            class="logo-lab"
            width={width}
            height={height}
            viewBox="0 0 522 584"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <g id="logo">
              <g id="Group">
                <g id="bubble-4">
                  <path
                    id="Vector"
                    d="M207.333 46.5333C205.867 47.2 203.2 49.3333 201.333 51.3333C198.533 54.2667 198 56.1333 198 62.9333C198 70.4 198.267 71.0667 203.2 75.6C208 80 208.667 80.2667 215.6 79.7333C221.6 79.2 223.6 78.2667 227.067 74.8C230.933 71.0667 231.333 69.8667 231.333 62.6667C231.333 55.4667 230.933 54.2667 227.067 50.5333C223.733 47.2 221.6 46.2667 216.4 45.8667C212.933 45.6 208.8 45.8667 207.333 46.5333Z"
                    fill={this.color}
                  ></path>
                </g>
                <g id="bubble-3">
                  <path
                    id="Vector_2"
                    d="M144.8 58.9333C136.8 61.0667 127.467 71.0667 125.333 79.7333C122.8 90.2667 125.333 98.8 133.333 106.667C153.867 127.333 187.733 108.667 181.333 80.2667C179.2 70.5333 170.267 61.2 161.067 58.9333C153.867 57.0667 151.867 57.0667 144.8 58.9333Z"
                    fill={this.color}
                  ></path>
                </g>
                <g id="bubble-2">
                  <path
                    id="Vector_3"
                    d="M221.2 110.933C207.333 118.933 207.467 140 221.333 147.867C231.467 153.6 244.933 150 250.533 140C261.067 121.2 239.867 100 221.2 110.933Z"
                    fill={this.color}
                  ></path>
                </g>
                <g id="bubble-1">
                  <path
                    id="Vector_4"
                    d="M165.733 133.333C158 136.533 157.2 148.933 164.533 153.467C172.8 158.667 181.733 153.733 181.733 144C181.733 140.267 180.8 137.6 179.2 135.867C176.133 132.933 169.733 131.6 165.733 133.333Z"
                    fill={this.color}
                  ></path>
                </g>
                <path
                  id="Vector_5"
                  d="M114.133 164.8C110.933 168.133 110.667 169.2 110.667 179.333C110.667 189.467 110.933 190.533 114.133 193.867C117.467 197.067 118.533 197.333 130.133 197.333H142.667V276.267C142.667 339.333 142.267 357.467 140.667 366C138.4 378.533 138.133 402.4 140.133 414.667C146.667 456 175.467 494.4 214 513.333C235.6 523.867 245.6 526 274 526C295.067 526 299.333 525.6 308.667 522.933C355.067 509.467 390.667 474.133 404 428C407.733 415.333 409.2 383.6 406.667 368.4C399.2 321.867 365.6 282.8 325.6 273.867C313.333 271.2 289.333 271.867 279.733 275.333C274.133 277.333 273.067 277.333 267.467 275.467C264 274.267 258 272.933 254 272.533L246.667 271.6V234.533V197.333H259.867C272.267 197.333 273.2 197.2 276.533 193.867C279.733 190.533 280 189.467 280 179.333C280 169.2 279.733 168.133 276.533 164.8L272.933 161.333H195.333H117.733L114.133 164.8ZM210.667 237.2V276.933L204.667 279.333C201.333 280.533 194.133 284.8 188.667 288.667L178.667 295.867V246.667V197.333H194.667H210.667V237.2ZM230.267 315.6C205.467 352.133 214.533 395.6 250.267 412.267C260.533 417.2 275.733 418.667 286.267 416.133C303.2 411.733 318 399.467 325.6 383.067C335.2 362.533 330.8 333.733 314.533 312.4C311.6 308.533 309.733 305.333 310.4 305.333C310.933 305.333 315.067 306.267 319.333 307.467C346.933 314.533 368.933 344.267 373.467 380.4C379.6 429.467 347.467 476.667 299.067 489.467C285.467 493.067 263.2 493.333 250 490.133C229.867 485.067 209.467 472.4 195.867 456.4C188.4 447.467 178.667 429.2 178.667 423.867C178.667 421.733 177.6 418.267 176.4 416.4C174.533 413.6 174 409.067 173.6 395.467C173.2 380.8 173.6 376.133 176 366.667C183.6 336.933 203.867 313.733 228 307.2C231.333 306.267 234.8 305.467 235.6 305.467C236.533 305.333 234.133 310 230.267 315.6ZM281.2 321.067C284.533 324.533 289.067 330.933 291.333 335.333C294.933 342.533 295.333 344.667 295.333 356.133C295.333 368.133 295.067 369.2 291.467 373.867C280.933 387.733 258.8 384.8 252.667 368.667C249.2 359.6 250.4 346.4 255.867 335.333C260.133 326.8 270.4 314.667 273.467 314.667C274.4 314.667 277.867 317.467 281.2 321.067Z"
                  fill={this.color}
                ></path>
              </g>
            </g>
          </svg>
        );
      })(),
      svg: (
        <div
          class={`svg-container ${this.svgAnimation}`}
          style={this.svgAnimation === 'custom' ? this.getCustomAnimationStyle() : {}}
        >
          {this.getSVGContent()}
        </div>
      )
    };

    return loaderTemplates[this.type] || loaderTemplates.spinner;
  }

  render() {
    const style = {
      '--color': this.color,
      '--size': `${this.size}px`,
      '--speed': `${this.speed}s`,
      '--transition': this.transition,
      '--text-color': this.textColor || this.color,
      '--animation-duration': `${this.animationDuration}s`,
      '--svg-size': `${this.svgSize}px`,
      // Variables de color para las animaciones de burbujas
      '--color-1': this.color || '#0FC2C0',
      '--color-2': '#0CABA8',
      '--color-3': '#008F8D',
      '--color-4': '#015A58',
      '--color-5': '#023535',
      // Variables para animaciones personalizadas
      '--scale-from': `${this.scaleFrom}`,
      '--scale-to': `${this.scaleTo}`,
      '--translate-x': `${this.translateX}px`,
      '--translate-y': `${this.translateY}px`,
      '--rotate-from': `${this.rotateFrom}deg`,
      '--rotate-to': `${this.rotateTo}deg`,
      '--opacity-from': `${this.opacityFrom}`,
      '--opacity-to': `${this.opacityTo}`,
      '--animation-easing': this.animationEasing,
      '--animation-direction': this.animationDirection,
      '--animation-iterations': `${this.animationIterations}`,
    };

    const contenStyle = this.debug ? {
      border: '2px solid rgba(4, 98, 4, 0.623)',
      padding: '10px',
      margin: '10px',
      borderRadius: '1rem',
    } : {};

    return (
      <div class="loader-wrapper" style={style}>
        <div style={contenStyle}>
          {this.debug && (
            <ul>
              <li>Type: {this.type}</li>
              <li>Animation: {this.svgAnimation}</li>
              <li>Duration: {this.animationDuration}s</li>
              <li>Size: {this.svgSize}px</li>
              {this.svgPath && <li>SVG Path: {this.svgPath.substring(0, 50)}...</li>}
            </ul>
          )}
          <div class="loader-container">
            {this.getLoaderHTML()}
          </div>
          {this.showText && <div class="loader-text">{this.text}</div>}
        </div>
      </div>
    );
  }
}
