import { render } from '@testing-library/react';

import App3Lib8 from './app3-lib8';

describe('App3Lib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib8 />);
    expect(baseElement).toBeTruthy();
  });
});
