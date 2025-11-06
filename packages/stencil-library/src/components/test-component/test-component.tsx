import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'test-component',
  styleUrl: 'test-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() text_button: string;

  private onClick = () => {
    alert(`Ha dado click sobre el boton ${this.text_button}`);
  };

  render() {
    return (
      <><><div class="container">
        <h1>Este es un componente de prueba</h1>
        <button class="button" onClick={this.onClick}>
          {this.text_button}
        </button>
      </div>
      
      <card-component card-title="Test" description="Esta es una descripcion" link="..."></card-component></>
      
      <toast-component></toast-component></>
    );
  }
}
