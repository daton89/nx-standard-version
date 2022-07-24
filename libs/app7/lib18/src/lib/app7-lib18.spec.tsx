import { render } from '@testing-library/react';

import App7Lib18 from './app7-lib18';

describe('App7Lib18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib18 />);
    expect(baseElement).toBeTruthy();
  });
});
