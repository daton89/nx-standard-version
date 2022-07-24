import { render } from '@testing-library/react';

import App7Lib8 from './app7-lib8';

describe('App7Lib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib8 />);
    expect(baseElement).toBeTruthy();
  });
});
