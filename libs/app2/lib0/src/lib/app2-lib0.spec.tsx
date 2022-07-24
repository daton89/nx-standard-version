import { render } from '@testing-library/react';

import App2Lib0 from './app2-lib0';

describe('App2Lib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib0 />);
    expect(baseElement).toBeTruthy();
  });
});
