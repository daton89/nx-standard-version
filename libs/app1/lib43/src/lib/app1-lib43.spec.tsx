import { render } from '@testing-library/react';

import App1Lib43 from './app1-lib43';

describe('App1Lib43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib43 />);
    expect(baseElement).toBeTruthy();
  });
});
