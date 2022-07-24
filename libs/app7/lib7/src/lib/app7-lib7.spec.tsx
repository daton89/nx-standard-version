import { render } from '@testing-library/react';

import App7Lib7 from './app7-lib7';

describe('App7Lib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib7 />);
    expect(baseElement).toBeTruthy();
  });
});
