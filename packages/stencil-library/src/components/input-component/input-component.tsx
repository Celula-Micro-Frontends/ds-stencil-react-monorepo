import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'input-component',
  styleUrl: 'input-component.css',
  shadow: true,
})
export class InputComponent {
  @Event() inputTarget: EventEmitter<{ name: string; value: string }>;
  @Prop() class: string;
  @Prop() name: string;
  @Prop() type: string = 'text';
  @Prop() text_label: string;
  @Prop() text_error: string;

  value = '';

  private onInputChange(event) {
    this.value = event.data;
    this.inputTarget.emit({ name: this.name, value: event.target.value });
  }
  
  render() {
    return (
      <div class={`container-input-component ${this.class}`}>
        {this.text_label && <label class="label">{this.text_label}</label>}
        <div class="container-input">
          <input type={this.type} class={this.type !== "date" ? "input" : "input-date"} name={this.name} onInput={event => this.onInputChange(event)} value={this.value} />
        </div>
        {this.text_error && <label class="label-error">* {this.text_error}</label>}
      </div>
    );
  }
}
