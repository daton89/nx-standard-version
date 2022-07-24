import { render } from '@testing-library/react';

import App7Lib39 from './app7-lib39';

describe('App7Lib39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib39 />);
    expect(baseElement).toBeTruthy();
  });
});
