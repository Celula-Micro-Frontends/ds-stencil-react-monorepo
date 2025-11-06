import { Component, h } from '@stencil/core';

@Component({
  tag: 'toast-component',
  styleUrl: 'toast-component.css',
  shadow: true,
})
export class ToastComponent {
  
  render() {
    return (
      <div class="container">
        <div class="container-buttons" id="cont-btn">
            <button class="btn success" data-tipo="success">Exito</button>
            <button class="btn error" data-tipo="error">Error</button>
            <button class="btn warning" data-tipo="warn">Warning</button>
            <button class="btn info" data-tipo="info">Info</button>
        </div>

        <div class="container-toast" id="cont-toast">
        </div>
    </div>
    );
  }
}
