import { newE2EPage } from '@stencil/core/testing';

describe('loader-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<loader-component></loader-component>');

    const element = await page.find('loader-component');
    expect(element).toHaveClass('hydrated');
  });

  it('changes type when attribute is updated', async () => {
    const page = await newE2EPage();
    await page.setContent('<loader-component></loader-component>');

    const component = await page.find('loader-component');
    const spinner = await page.find('loader-component >>> .spinner');
    expect(spinner).toBeTruthy();

    component.setProperty('type', 'dots');
    await page.waitForChanges();

    const dots = await page.find('loader-component >>> .dots');
    expect(dots).toBeTruthy();
  });

  it('updates color when attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<loader-component color="#ff0000"></loader-component>');

    const wrapper = await page.find('loader-component >>> .loader-wrapper');

    const style = await wrapper.getComputedStyle();
    expect(style.getPropertyValue('--color')).toBe('#ff0000');
  });

  it('hides text when showText is false', async () => {
    const page = await newE2EPage();
    await page.setContent('<loader-component show-text="false"></loader-component>');

    const text = await page.find('loader-component >>> .loader-text');
    expect(text).toBeFalsy();
  });

  it('shows custom text', async () => {
    const page = await newE2EPage();
    await page.setContent('<loader-component text="Custom loading..."></loader-component>');

    const text = await page.find('loader-component >>> .loader-text');
    expect(text.textContent).toBe('Custom loading...');
  });
});
