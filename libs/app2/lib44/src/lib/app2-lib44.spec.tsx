import { render } from '@testing-library/react';

import App2Lib44 from './app2-lib44';

describe('App2Lib44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib44 />);
    expect(baseElement).toBeTruthy();
  });
});
