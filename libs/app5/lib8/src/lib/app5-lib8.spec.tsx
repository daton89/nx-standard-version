import { render } from '@testing-library/react';

import App5Lib8 from './app5-lib8';

describe('App5Lib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib8 />);
    expect(baseElement).toBeTruthy();
  });
});
