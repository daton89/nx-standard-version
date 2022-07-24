import { render } from '@testing-library/react';

import App7Lib34 from './app7-lib34';

describe('App7Lib34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib34 />);
    expect(baseElement).toBeTruthy();
  });
});
