import { render } from '@testing-library/react';

import App7Lib4 from './app7-lib4';

describe('App7Lib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib4 />);
    expect(baseElement).toBeTruthy();
  });
});
