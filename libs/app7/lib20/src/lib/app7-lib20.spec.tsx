import { render } from '@testing-library/react';

import App7Lib20 from './app7-lib20';

describe('App7Lib20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib20 />);
    expect(baseElement).toBeTruthy();
  });
});
