import { render } from '@testing-library/react';

import App8Lib43 from './app8-lib43';

describe('App8Lib43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib43 />);
    expect(baseElement).toBeTruthy();
  });
});
