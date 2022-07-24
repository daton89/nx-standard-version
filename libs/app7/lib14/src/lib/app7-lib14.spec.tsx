import { render } from '@testing-library/react';

import App7Lib14 from './app7-lib14';

describe('App7Lib14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib14 />);
    expect(baseElement).toBeTruthy();
  });
});
