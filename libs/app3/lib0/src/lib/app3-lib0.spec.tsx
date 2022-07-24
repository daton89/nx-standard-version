import { render } from '@testing-library/react';

import App3Lib0 from './app3-lib0';

describe('App3Lib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib0 />);
    expect(baseElement).toBeTruthy();
  });
});
