import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import {
  SIZE_BUTTON,
  SizeButton,
  TYPE_BUTTON,
  TypeButton,
  VARIANT_BUTTON,
  VariantButton,
  WIDTH_MODE,
  WidthMode
} from './button-interfaces';

const BUTTON_COMPONENT = 'button-component';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.scss',
  shadow: true
})
export class ButtonComponent {
  /**
   * The type of the button. BUTTON, SUBMIT, RESET.
   */
  @Prop({ mutable: false }) type: TypeButton = TYPE_BUTTON.SUBMIT;

  /**
   * The type of the button. BUTTON, SUBMIT, RESET.
   */
  @Prop() heading: string;
  /**
   * Show loading state in the button.
   */
  @Prop({ mutable: false }) loading: boolean = false;

  /**
   * The id of the button.
   */
  @Prop({ mutable: false }) idButton!: string;

  /**
   * The disabled state of the button.
   */
  @Prop({ mutable: false }) disabled: boolean = false;

  /**
   * The html index of the button.
   */
  @Prop({ mutable: false }) htmlIndex: number = 0;

  /**
   * The name of the button.
   */
  @Prop({ mutable: false }) name?: string;

  /**
   * The prefix icon of the button.
   */
  @Prop({ mutable: false }) prefixIcon?: string;

  /**
   * The suffix icon of the button.
   */
  @Prop({ mutable: false }) suffixIcon?: string;

  /**
   * The mode width button default | full.
   */
  @Prop({ mutable: false }) widthMode?: WidthMode = WIDTH_MODE.DEFAULT;

  /**
   * The size of the button. PRIMARY, SECONDARY, TERTIARY, BORDERLESS.
   */
  @Prop({ mutable: false }) size: SizeButton = SIZE_BUTTON.REGULAR;

  /**
   * The variant of the button. PRIMARY, SECONDARY, TERTIARY, BORDERLESS.
   */
  @Prop({ mutable: false }) variant: VariantButton = VARIANT_BUTTON.PRIMARY;

  /**
   * The event emitted when the button is clicked.
   */
  @Event({ bubbles: true, composed: true }) buttonClick: EventEmitter<{
    id: string;
  }>;

  @State() isSlotEmpty: boolean = true;

  #onButtonClick = (): void => {
    this.buttonClick.emit({
      id: this.idButton
    });
  };
  private handleSlotChange = (event: Event) => {
    const slot = event.target as HTMLSlotElement;
    const assignedNodes = slot.assignedNodes({ flatten: true });
    this.isSlotEmpty = !assignedNodes.some((node) =>
      node.nodeType === Node.TEXT_NODE ? node.textContent.trim() !== '' : true
    );
  };

  private isLoadingAllowed(): boolean {
    return (
      this.loading &&
      (this.variant === VARIANT_BUTTON.PRIMARY ||
        this.variant === VARIANT_BUTTON.SECONDARY)
    );
  }

  render() {
    return (
      <button
        id={this.idButton}
        type={this.type}
        disabled={this.disabled}
        {...(this.heading !== undefined ? { part: this.heading } : {})}
        tabIndex={this.htmlIndex}
        name={this.name}
        class={{
          [`${BUTTON_COMPONENT}--${this.widthMode}`]:
            this.widthMode !== WIDTH_MODE.DEFAULT,
          [`${BUTTON_COMPONENT}`]: true,
          [`${BUTTON_COMPONENT}--${this.variant}`]: true,
          [`${BUTTON_COMPONENT}--${this.size}`]: true,
          [`${BUTTON_COMPONENT}--loading-${this.variant}`]:
            this.isLoadingAllowed(),
          [`${BUTTON_COMPONENT}--no-label`]: this.isSlotEmpty,
          [`${BUTTON_COMPONENT}--disabled`]: this.disabled
        }}
        onClick={this.#onButtonClick}>
        <span
          class={`${BUTTON_COMPONENT}__content`}
          style={{ visibility: this.loading ? 'hidden' : 'visible' }}>
          {this.prefixIcon && <icon-component icon={this.prefixIcon} />}
          <slot onSlotchange={this.handleSlotChange}></slot>
          {this.suffixIcon && !this.isSlotEmpty && (
            <icon-component icon={this.suffixIcon} />
          )}
        </span>

        {this.isLoadingAllowed() && (
          <span class={`${BUTTON_COMPONENT}__loading`}>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </span>
        )}
      </button>
    );
  }
}
