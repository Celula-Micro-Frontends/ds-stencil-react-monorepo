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

  // Nuevas propiedades para SVG
  @Prop() svgPath: string; // Ruta o contenido del SVG

  @Prop() svgAnimation: 'rotate' | 'scale' | 'pulse-scale' | 'bounce' | 'translate' | 'custom' | 'none' = 'rotate';

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

    const contenStyle = {
      border: '2px solid rgba(4, 98, 4, 0.623)',
      padding: '10px',
      margin: '10px',
      borderRadius: '1rem',

    };

    return (
      <div class="loader-wrapper" style={style}>
        <div style={contenStyle}>
          <p>Loader Component Debug - Type: {this.type}</p>
          <div class="loader-container">
            {this.getLoaderHTML()}
          </div>
          {this.showText && <div class="loader-text">{this.text}</div>}
        </div>
      </div>
    );
  }
}
