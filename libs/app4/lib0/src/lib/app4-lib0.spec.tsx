import { render } from '@testing-library/react';

import App4Lib0 from './app4-lib0';

describe('App4Lib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib0 />);
    expect(baseElement).toBeTruthy();
  });
});
