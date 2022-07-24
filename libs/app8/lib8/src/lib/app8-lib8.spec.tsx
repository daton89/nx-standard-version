import { render } from '@testing-library/react';

import App8Lib8 from './app8-lib8';

describe('App8Lib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib8 />);
    expect(baseElement).toBeTruthy();
  });
});
