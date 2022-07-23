import { render } from '@testing-library/react';

import { Carousel } from './shared-ft-carousel';

function renderComponent() {
  return render(
    <Carousel>
      <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
    </Carousel>
  );
}

describe('Carousel', () => {
  it('should render successfully', () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toBeTruthy();
  });
});
