import { render } from '@testing-library/react';

import App7Lib0 from './app7-lib0';

describe('App7Lib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib0 />);
    expect(baseElement).toBeTruthy();
  });
});
