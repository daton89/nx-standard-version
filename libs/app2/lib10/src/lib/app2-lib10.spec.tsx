import { render } from '@testing-library/react';

import App2Lib10 from './app2-lib10';

describe('App2Lib10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib10 />);
    expect(baseElement).toBeTruthy();
  });
});
