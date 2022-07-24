import { render } from '@testing-library/react';

import App9Lib10 from './app9-lib10';

describe('App9Lib10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib10 />);
    expect(baseElement).toBeTruthy();
  });
});
