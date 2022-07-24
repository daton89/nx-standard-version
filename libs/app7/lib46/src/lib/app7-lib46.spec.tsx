import { render } from '@testing-library/react';

import App7Lib46 from './app7-lib46';

describe('App7Lib46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib46 />);
    expect(baseElement).toBeTruthy();
  });
});
