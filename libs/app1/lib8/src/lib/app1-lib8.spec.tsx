import { render } from '@testing-library/react';

import App1Lib8 from './app1-lib8';

describe('App1Lib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib8 />);
    expect(baseElement).toBeTruthy();
  });
});
