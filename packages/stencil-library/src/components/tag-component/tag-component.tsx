import { Component, Prop, Event, EventEmitter, State, h, Host } from '@stencil/core';

@Component({
  tag: 'tag-component',
  styleUrl: 'tag-component.css',
  shadow: true,
})
export class TagComponent {
  /**
   * Estado interno para controlar si el tag está visible (usado cuando se cierra)
   */
  @State() private isVisible: boolean = true;

  /**
   * Estado interno para controlar la animación de salida
   */
  @State() private isClosing: boolean = false;
  /**
   * Texto del tag
   */
  @Prop() text: string = 'Tag';

  /**
   * Tamaño del tag: 'small', 'medium', 'large'
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Forma del tag: 'rounded', 'pill', 'square'
   */
  @Prop() shape: 'rounded' | 'pill' | 'square' = 'rounded';

  /**
   * Variante del tag: 'filled', 'outlined', 'ghost'
   */
  @Prop() variant: 'filled' | 'outlined' | 'ghost' = 'filled';

  /**
   * Color de fondo del tag
   */
  @Prop() bgColor: string = '#0FC2C0';

  /**
   * Color del texto
   */
  @Prop() textColor: string = '#ffffff';

  /**
   * Color del borde (para variantes outlined y ghost)
   */
  @Prop() borderColor: string = '#0FC2C0';

  /**
   * Si el tag es clickeable
   */
  @Prop() clickable: boolean = false;

  /**
   * Si el tag tiene botón de cierre
   */
  @Prop() closable: boolean = false;

  /**
   * Si el tag está deshabilitado
   */
  @Prop() disabled: boolean = false;

  /**
   * Icono personalizado (puede ser un emoji o HTML)
   */
  @Prop() icon: string;

  /**
   * Posición del icono: 'left' o 'right'
   */
  @Prop() iconPosition: 'left' | 'right' = 'left';

  /**
   * Ancho personalizado (opcional)
   */
  @Prop() width: string;

  /**
   * Altura personalizada (opcional)
   */
  @Prop() height: string;

  /**
   * Radio del borde personalizado
   */
  @Prop() borderRadius: string;

  /**
   * Tamaño de fuente personalizado
   */
  @Prop() fontSize: string;

  /**
   * Padding personalizado
   */
  @Prop() padding: string;

  /**
   * Evento emitido cuando se hace click en el tag
   */
  @Event() tagClick: EventEmitter<void>;

  /**
   * Evento emitido cuando se cierra el tag
   */
  @Event() tagClose: EventEmitter<void>;

  /**
   * Evento emitido cuando el mouse entra en el tag
   */
  @Event() tagMouseEnter: EventEmitter<void>;

  /**
   * Evento emitido cuando el mouse sale del tag
   */
  @Event() tagMouseLeave: EventEmitter<void>;

  private handleClick = () => {
    if (!this.disabled && this.clickable) {
      this.tagClick.emit();
    }
  };

  private handleClose = (e: Event) => {
    e.stopPropagation();
    if (!this.disabled) {
      // Iniciar animación de cierre
      this.isClosing = true;

      // Emitir evento de cierre
      this.tagClose.emit();

      // Después de la animación, ocultar el componente
      setTimeout(() => {
        this.isVisible = false;
      }, 300); // Duración de la animación
    }
  };

  private handleMouseEnter = () => {
    if (!this.disabled) {
      this.tagMouseEnter.emit();
    }
  };

  private handleMouseLeave = () => {
    if (!this.disabled) {
      this.tagMouseLeave.emit();
    }
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    if (this.disabled) return;

    // Disparar click con Enter o Space para accesibilidad cuando el tag es clickeable
    if (this.clickable && (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar')) {
      e.preventDefault();
      this.tagClick.emit();
    }
  };

  render() {
    // Si el tag está cerrado, no renderizar nada
    if (!this.isVisible) {
      return null;
    }

    // Construir style solo con variables definidas para evitar sobreescribir
    // los valores por defecto en CSS (evita establecer --border-radius: undefined)
    const style: { [k: string]: string } = {};
    if (this.bgColor !== undefined) style['--bg-color'] = this.bgColor;
    if (this.textColor !== undefined) style['--text-color'] = this.textColor;
    if (this.borderColor !== undefined) style['--border-color'] = this.borderColor;
    if (this.width !== undefined) style['--width'] = this.width;
    if (this.height !== undefined) style['--height'] = this.height;
    if (this.borderRadius !== undefined) style['--border-radius'] = this.borderRadius;
    if (this.fontSize !== undefined) style['--font-size'] = this.fontSize;
    if (this.padding !== undefined) style['--padding'] = this.padding;

    // Construir lista de clases de forma explícita (más fiable que pasar objeto)
    const classList: string[] = [
      'tag',
      `tag--${this.size}`,
      `tag--${this.shape}`,
      `tag--${this.variant}`,
    ];
    if (this.clickable && !this.disabled) classList.push('tag--clickable');
    if (this.disabled) classList.push('tag--disabled');
    if (this.icon) classList.push('tag--with-icon');
    if (this.isClosing) classList.push('tag--closing');

    return (
      <Host style={style}>
        <div
          class={classList.join(' ')}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          role={this.clickable ? 'button' : undefined}
          tabindex={this.clickable && !this.disabled ? 0 : undefined}
          aria-disabled={this.disabled ? 'true' : undefined}
        >
          {this.icon && this.iconPosition === 'left' && (
            <span class="tag__icon tag__icon--left" innerHTML={this.icon}></span>
          )}

          <span class="tag__text">{this.text}</span>

          {this.icon && this.iconPosition === 'right' && (
            <span class="tag__icon tag__icon--right" innerHTML={this.icon}></span>
          )}

          {this.closable && (
            <button
              class="tag__close"
              onClick={this.handleClose}
              aria-label="Close"
              disabled={this.disabled}
            >
              ×
            </button>
          )}
        </div>
      </Host>
    );
  }
}
