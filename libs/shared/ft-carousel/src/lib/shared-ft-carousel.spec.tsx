import { render } from '@testing-library/react';

import SharedFtCarousel from './shared-ft-carousel';

describe('SharedFtCarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedFtCarousel />);
    expect(baseElement).toBeTruthy();
  });
});
