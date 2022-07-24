import { render } from '@testing-library/react';

import App4Lib43 from './app4-lib43';

describe('App4Lib43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib43 />);
    expect(baseElement).toBeTruthy();
  });
});
