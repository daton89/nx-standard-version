import { render } from '@testing-library/react';

import App8Lib10 from './app8-lib10';

describe('App8Lib10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib10 />);
    expect(baseElement).toBeTruthy();
  });
});
