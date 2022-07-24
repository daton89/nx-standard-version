import { render } from '@testing-library/react';

import App1Lib44 from './app1-lib44';

describe('App1Lib44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib44 />);
    expect(baseElement).toBeTruthy();
  });
});
