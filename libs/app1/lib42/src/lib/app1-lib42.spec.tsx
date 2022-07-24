import { render } from '@testing-library/react';

import App1Lib42 from './app1-lib42';

describe('App1Lib42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib42 />);
    expect(baseElement).toBeTruthy();
  });
});
