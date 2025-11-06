import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.css',
  shadow: true,
})
export class CardComponent {
  @Prop() cardTitle: string; 
  @Prop() description: string;
  @Prop() link: string;

  render() {
    return (
      <div class="body">
        <div class="grid">
          <div class="card">
              <div class="card-head">
                  <img src="https://picsum.photos/id/237/200/300" alt=""/>
              </div>
              <div class="card-body">
                  <div class="title">{this.cardTitle}</div>
                  <div class="text">{this.description}</div>
                  <a href="" class="body-btn">{this.link}</a>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
