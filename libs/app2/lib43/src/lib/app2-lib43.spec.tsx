import { render } from '@testing-library/react';

import App2Lib43 from './app2-lib43';

describe('App2Lib43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib43 />);
    expect(baseElement).toBeTruthy();
  });
});
