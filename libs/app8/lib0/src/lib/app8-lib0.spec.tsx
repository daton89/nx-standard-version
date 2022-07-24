import { render } from '@testing-library/react';

import App8Lib0 from './app8-lib0';

describe('App8Lib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib0 />);
    expect(baseElement).toBeTruthy();
  });
});
