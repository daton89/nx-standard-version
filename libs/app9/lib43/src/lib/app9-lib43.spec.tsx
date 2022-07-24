import { render } from '@testing-library/react';

import App9Lib43 from './app9-lib43';

describe('App9Lib43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib43 />);
    expect(baseElement).toBeTruthy();
  });
});
