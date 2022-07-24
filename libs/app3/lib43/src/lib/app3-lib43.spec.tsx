import { render } from '@testing-library/react';

import App3Lib43 from './app3-lib43';

describe('App3Lib43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib43 />);
    expect(baseElement).toBeTruthy();
  });
});
