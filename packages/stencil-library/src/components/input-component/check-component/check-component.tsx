import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'check-component',
  styleUrl: 'check-component.css',
  shadow: true,
})
export class CheckComponent {
  @Event() inputTarget: EventEmitter<{ name: string; value: string }>;
  @Prop() class: string;
  @Prop() name: string;
  @Prop() type: string = 'check';
  @Prop() text_label: string;
  @Prop() text_error: string;
  @Prop() value: string;

  private onInputChange(event) {
    this.inputTarget.emit({ name: this.name, value: event.target.value });
  }

  render() {
    return (
      <div class={`container-check-component ${this.class}`}>
        <div class={`container-check`}>
          <input class="check-component" type="checkbox" value={this.value} name={this.name} onInput={event => this.onInputChange(event)} />
          {this.text_label && <label class="label">{this.text_label}</label>}
        </div>
        {this.text_error && <label class="label-error">* {this.text_error}</label>}
      </div>
    );
  }
}
