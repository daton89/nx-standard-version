import { render } from '@testing-library/react';

import App9Lib0 from './app9-lib0';

describe('App9Lib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib0 />);
    expect(baseElement).toBeTruthy();
  });
});
