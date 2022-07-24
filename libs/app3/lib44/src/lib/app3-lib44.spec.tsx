import { render } from '@testing-library/react';

import App3Lib44 from './app3-lib44';

describe('App3Lib44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib44 />);
    expect(baseElement).toBeTruthy();
  });
});
