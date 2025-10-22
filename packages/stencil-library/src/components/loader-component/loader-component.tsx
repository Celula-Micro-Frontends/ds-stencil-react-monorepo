import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'loader-component',
  styleUrl: 'loader-component.css',
  shadow: true,
})
export class LoaderComponent {
  @Prop() type: 'spinner' | 'dots' | 'pulse' | 'bars' | 'ring' | 'dual-ring' | 'ellipsis' | 'ripple' = 'spinner';

  @Prop() color: string = '#3498db';

  @Prop() text: string = 'Cargando...';

  @Prop() size: number = 50;

  @Prop() speed: number = 1;

  @Prop() transition: string = 'ease-in-out';

  @Prop() textColor: string;

  @Prop() showText: boolean = true;

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
