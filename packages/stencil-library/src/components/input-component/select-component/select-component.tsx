import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'select-component',
  styleUrl: 'select-component.css',
  shadow: true,
})
export class SelectComponent {
  @Event() inputTarget: EventEmitter<{ name: string; value: string }>;
  @Prop() class: string;
  @Prop() name: string;
  @Prop() text_label: string;
  @Prop() text_error: string;
  @Prop() data: [{ value: string; text: string }];

  private onInputChange(event) {
    this.inputTarget.emit({ name: this.name, value: event.target.value });
  }

  render() {
    return (
      <div class={`select-component ${this.class}`}>
        {this.text_label && <label class="label">{this.text_label}</label>}
        <div class="select-component-container">
          <select class="select-component-input-select" name={this.name} onInput={event => this.onInputChange(event)}>
            <option value="">Selecciona una opción</option>
            {this.data?.length > 0 && (
              <>
                {this.data.map(item => (
                  <option value={item.value}>{item.text}</option>
                ))}
              </>
            )}
          </select>
        </div>
        {this.text_error && <label class="label-error">* {this.text_error}</label>}
      </div>
    );
  }
}
