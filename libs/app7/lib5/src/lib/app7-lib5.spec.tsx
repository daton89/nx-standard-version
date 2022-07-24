import { render } from '@testing-library/react';

import App7Lib5 from './app7-lib5';

describe('App7Lib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib5 />);
    expect(baseElement).toBeTruthy();
  });
});
