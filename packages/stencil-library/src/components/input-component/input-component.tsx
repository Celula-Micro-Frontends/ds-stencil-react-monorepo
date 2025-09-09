import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'input-component',
  styleUrl: 'input-component.css',
  shadow: true,
})
export class InputComponent {
  @Prop() class: string;
  @Prop() name: string;
  @Prop() value: string;
  @Prop() type: string = 'text';
  @Prop() text_label: string;
  @Prop() text_error: string;

  render() {
    return (
      <div class={`container-input-component ${this.class}`}>
        {this.text_label && <label class="label">{this.text_label}</label>}
        <div class="container-input">
          <input type={this.type} class="input" name={this.name} value={this.value} />
        </div>
        {this.text_error && <label class="label-error">*{this.text_error}</label>}
      </div>
    );
  }
}
