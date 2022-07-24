import { render } from '@testing-library/react';

import App2Lib42 from './app2-lib42';

describe('App2Lib42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib42 />);
    expect(baseElement).toBeTruthy();
  });
});
