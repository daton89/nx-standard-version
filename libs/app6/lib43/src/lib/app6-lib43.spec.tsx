import { render } from '@testing-library/react';

import App6Lib43 from './app6-lib43';

describe('App6Lib43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib43 />);
    expect(baseElement).toBeTruthy();
  });
});
