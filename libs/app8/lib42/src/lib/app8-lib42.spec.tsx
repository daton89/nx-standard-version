import { render } from '@testing-library/react';

import App8Lib42 from './app8-lib42';

describe('App8Lib42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib42 />);
    expect(baseElement).toBeTruthy();
  });
});
