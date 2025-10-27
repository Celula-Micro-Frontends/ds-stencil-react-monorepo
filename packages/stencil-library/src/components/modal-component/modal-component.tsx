import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'modal-component',
  styleUrl: 'modal-component.css',
  shadow: true,
})
export class ModalComponent {
  @Prop() title: string = '';
  @Prop() is_open: boolean = false; // Prop to control modal visibility
  @Prop() width: string = '';
  @Prop() height: string = '';

  @Event() modalClosed: EventEmitter<void>;

  private onClose() {
    this.is_open = false;
    this.modalClosed.emit();
  }

  render() {
    return (
      <div class={{ 'modal-overlay': true, 'is-open': this.is_open }}>
        <div class={`modal-content`} style={{ width: this.width, height: this.height }}>
          <div class="modal-header">
            <span onClick={() => this.onClose()}>Cerrar</span>
            {this.title !== '' && (
              <>
                <h1>{this.title}</h1>
                <hr />
              </>
            )}
          </div>
          <slot></slot>
        </div>
      </div>
    );
  }
}
