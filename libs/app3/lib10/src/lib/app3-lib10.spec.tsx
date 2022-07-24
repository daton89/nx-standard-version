import { render } from '@testing-library/react';

import App3Lib10 from './app3-lib10';

describe('App3Lib10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib10 />);
    expect(baseElement).toBeTruthy();
  });
});
