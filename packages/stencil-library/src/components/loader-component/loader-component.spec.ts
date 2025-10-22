import { newSpecPage } from '@stencil/core/testing';
import { LoaderComponent } from './loader-component';

describe('loader-component', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [LoaderComponent],
      html: `<loader-component></loader-component>`,
    });

    expect(page.root).toEqualHtml(`
      <loader-component>
        <mock:shadow-root>
          <div class="loader-wrapper" style="--color: #3498db; --size: 50px; --speed: 1s; --transition: ease-in-out; --text-color: #3498db;">
            <div class="loader-container">
              <div class="spinner"></div>
            </div>
            <div class="loader-text">Cargando...</div>
          </div>
        </mock:shadow-root>
      </loader-component>
    `);
  });

  it('renders with custom props', async () => {
    const page = await newSpecPage({
      components: [LoaderComponent],
      html: `<loader-component type="dots" color="#e74c3c" size="80" text="Loading..." show-text="false"></loader-component>`,
    });

    expect(page.root).toEqualHtml(`
      <loader-component type="dots" color="#e74c3c" size="80" text="Loading..." show-text="false">
        <mock:shadow-root>
          <div class="loader-wrapper" style="--color: #e74c3c; --size: 80px; --speed: 1s; --transition: ease-in-out; --text-color: #e74c3c;">
            <div class="loader-container">
              <div class="dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </loader-component>
    `);
  });

  it('renders different loader types', async () => {
    const types = ['spinner', 'dots', 'pulse', 'bars', 'ring', 'dual-ring', 'ellipsis', 'ripple'];

    for (const type of types) {
      const page = await newSpecPage({
        components: [LoaderComponent],
        html: `<loader-component type="${type}"></loader-component>`,
      });

      expect(page.root.shadowRoot.querySelector('.loader-container')).toBeTruthy();
    }
  });

  it('shows/hides text based on showText prop', async () => {
    const pageWithText = await newSpecPage({
      components: [LoaderComponent],
      html: `<loader-component></loader-component>`,
    });

    const pageWithoutText = await newSpecPage({
      components: [LoaderComponent],
      html: `<loader-component></loader-component>`,
    });

    // Set the property directly
    pageWithoutText.rootInstance.showText = false;
    await pageWithoutText.waitForChanges();

    expect(pageWithText.root.shadowRoot.querySelector('.loader-text')).toBeTruthy();
    expect(pageWithoutText.root.shadowRoot.querySelector('.loader-text')).toBeFalsy();
  });
});
