import { render } from '@testing-library/react';

import App2Lib8 from './app2-lib8';

describe('App2Lib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib8 />);
    expect(baseElement).toBeTruthy();
  });
});
