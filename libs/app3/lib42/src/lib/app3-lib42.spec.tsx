import { render } from '@testing-library/react';

import App3Lib42 from './app3-lib42';

describe('App3Lib42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib42 />);
    expect(baseElement).toBeTruthy();
  });
});
