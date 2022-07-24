import { render } from '@testing-library/react';

import App4Lib10 from './app4-lib10';

describe('App4Lib10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib10 />);
    expect(baseElement).toBeTruthy();
  });
});
