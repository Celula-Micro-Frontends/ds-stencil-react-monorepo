import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'toast-component',
  styleUrl: 'toast-component.css',
  shadow: true,
})
export class ToastComponent {

  containerButtons: HTMLElement;
  containerToast: HTMLElement;

  @Prop() type: string;
  @Prop() title: string;
  @Prop() description: string;
  @Prop() autoclose: boolean;

  // Referencias para los contenedores
  private contBtnRef = (el: HTMLElement) => { this.containerButtons = el; };
  private contToastRef = (el: HTMLElement) => { this.containerToast = el; };

  componentDidLoad() {
    // Las referencias ya estarán asignadas por los ref en el render
    // Puedes usar esto para debug
    // console.log('Refs:', this.containerButtons, this.containerToast);

    // Event listener para cerrar el toast al hacer click en el botón de cerrar
    if (this.containerToast) {
      this.containerToast.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;
        const toastDiv = target.closest('div.toast') as HTMLElement | null;
        const toastId = toastDiv ? toastDiv.id : null;

        if (target.closest('button.btn-close') && toastId) {
          this.closeToast(toastId);
        }
      });
    }
  }

  addToast = ({type}) => {
    const newToast = document.createElement('div');

    newToast.classList.add('toast');
    newToast.classList.add(type);
    if(this.autoclose) newToast.classList.add('autoclose');

    // id único como string
    const toastId = `toast-${Date.now()}-${Math.floor(Math.random() * 100)}`;
    newToast.id = toastId;
    
    // Iconos
    const icons = {
      success: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path
                        d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                </svg>`,
      error: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg>`,
      info: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path
                    d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>`,
      warning: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path
                        d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z" />
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                </svg>`,
    };
    
    // Template
    const toast = `
        <div class="content">
            <div class="icon">
                ${icons[type]}
            </div>
            <div class="text">
                <p class="title">${this.title}</p>
                <p class="description">${this.description}</p>
            </div>
        </div>
        <button class="btn-close">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
            </div>
        </button>`;

    newToast.innerHTML = toast;
    this.containerToast.appendChild(newToast);

    if(this.autoclose){
        setTimeout(() => this.closeToast(toastId), 5000);
    }
  };

  closeToast  =  (id:  string) =>  {
   const  toastEl  =  this.containerToast.querySelector(`#${id}`);
   if  (!toastEl) return;
   toastEl.remove();
 };


  createSuccess = () => {
    this.addToast({type: 'success'})
  }

  createError = () => {
    this.addToast({type: 'error'})
  }

  createWarning = () => {
    this.addToast({type: 'warning'})
  }

  createInfo = () => {
    this.addToast({type: 'info'})
  }
  
  render() {
    return (
      <div class="container">
        <div class="container-buttons" id="cont-btn" ref={this.contBtnRef}>
            <button class="btn success" data-tipo="success" onClick={this.createSuccess}>Exito</button>
            <button class="btn error" data-tipo="error" onClick={this.createError}>Error</button>
            <button class="btn warning" data-tipo="warn" onClick={this.createWarning}>Warning</button>
            <button class="btn info" data-tipo="info" onClick={this.createInfo}>Info</button>
        </div>

        <div class="container-toast" id="cont-toast" ref={this.contToastRef}>
        </div>
    </div>
    );
  }
}
