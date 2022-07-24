import { render } from '@testing-library/react';

import App7Lib10 from './app7-lib10';

describe('App7Lib10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib10 />);
    expect(baseElement).toBeTruthy();
  });
});
