import { render } from '@testing-library/react';

import App5Lib10 from './app5-lib10';

describe('App5Lib10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib10 />);
    expect(baseElement).toBeTruthy();
  });
});
