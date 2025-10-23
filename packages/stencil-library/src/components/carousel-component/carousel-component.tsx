import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'app-carousel',
  styleUrl: 'carousel-component.css',
  shadow: true,
})
export class AppCarousel {
  @Prop() variant: 'slider' | 'dots' | 'mixed' = 'slider';
  @Prop() images: string[] = [];
  @Prop() texts?: string[] = [];
  @Prop() interval: number = 3000;
  @Prop() width: string = '100%';      // 🔹 Nuevo
  @Prop() height: string = '400px';    // 🔹 Nuevo
  @Prop() objectFit: 'cover' | 'contain' = 'contain'; // 🔹 Controla cómo se ajusta la imagen

  @State() currentIndex: number = 0;
  private intervalId: any;

  componentDidLoad() {
    if (this.variant === 'slider' || this.variant === 'mixed') {
      this.startAutoSlide();
    }
  }

  disconnectedCallback() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  stopAutoSlide() {
    clearInterval(this.intervalId);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  renderControls() {
    if (this.variant === 'dots' || this.variant === 'mixed') {
      return (
        <div class="dots">
          {this.images.map((_, index) => (
            <span
              class={{ dot: true, active: index === this.currentIndex }}
              onClick={() => this.goToSlide(index)}
            ></span>
          ))}
        </div>
      );
    }
    return null;
  }

  renderArrows() {
    if (this.variant === 'slider' || this.variant === 'mixed') {
      return (
        <div class="arrows">
          <button class="prev" onClick={() => this.prevSlide()}>&lt;</button>
          <button class="next" onClick={() => this.nextSlide()}>&gt;</button>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div
        class="carousel-wrapper"
        style={{
          width: this.width,
          height: this.height,
        }}
      >
        <div class="carousel">
          {this.images.map((img, index) => (
            <div
              class={{
                slide: true,
                active: index === this.currentIndex,
              }}
            >
              <img
                src={img}
                alt={this.texts?.[index] || `Slide ${index + 1}`}
                style={{ objectFit: this.objectFit }}
              />
              {this.texts?.[index] && (
                <div class="caption">{this.texts[index]}</div>
              )}
            </div>
          ))}
        </div>

        {this.renderArrows()}
        {this.renderControls()}
      </div>
    );
  }
}
