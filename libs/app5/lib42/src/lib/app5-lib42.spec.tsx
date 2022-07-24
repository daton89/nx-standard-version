import { render } from '@testing-library/react';

import App5Lib42 from './app5-lib42';

describe('App5Lib42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib42 />);
    expect(baseElement).toBeTruthy();
  });
});
