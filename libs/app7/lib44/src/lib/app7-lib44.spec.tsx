import { render } from '@testing-library/react';

import App7Lib44 from './app7-lib44';

describe('App7Lib44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib44 />);
    expect(baseElement).toBeTruthy();
  });
});
