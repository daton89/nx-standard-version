import { render } from '@testing-library/react';

import App1Lib10 from './app1-lib10';

describe('App1Lib10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib10 />);
    expect(baseElement).toBeTruthy();
  });
});
