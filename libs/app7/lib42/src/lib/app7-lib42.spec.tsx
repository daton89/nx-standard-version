import { render } from '@testing-library/react';

import App7Lib42 from './app7-lib42';

describe('App7Lib42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib42 />);
    expect(baseElement).toBeTruthy();
  });
});
