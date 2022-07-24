import { render } from '@testing-library/react';

import App9Lib42 from './app9-lib42';

describe('App9Lib42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib42 />);
    expect(baseElement).toBeTruthy();
  });
});
