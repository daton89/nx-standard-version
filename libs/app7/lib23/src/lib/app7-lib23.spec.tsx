import { render } from '@testing-library/react';

import App7Lib23 from './app7-lib23';

describe('App7Lib23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib23 />);
    expect(baseElement).toBeTruthy();
  });
});
