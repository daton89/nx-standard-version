import { render } from '@testing-library/react';

import App1Lib0 from './app1-lib0';

describe('App1Lib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib0 />);
    expect(baseElement).toBeTruthy();
  });
});
