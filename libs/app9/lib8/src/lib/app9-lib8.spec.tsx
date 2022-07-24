import { render } from '@testing-library/react';

import App9Lib8 from './app9-lib8';

describe('App9Lib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib8 />);
    expect(baseElement).toBeTruthy();
  });
});
