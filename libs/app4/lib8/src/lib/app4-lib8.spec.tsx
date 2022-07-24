import { render } from '@testing-library/react';

import App4Lib8 from './app4-lib8';

describe('App4Lib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib8 />);
    expect(baseElement).toBeTruthy();
  });
});
