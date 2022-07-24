import { render } from '@testing-library/react';

import App5Lib0 from './app5-lib0';

describe('App5Lib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib0 />);
    expect(baseElement).toBeTruthy();
  });
});
