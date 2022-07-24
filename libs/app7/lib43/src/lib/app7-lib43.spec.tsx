import { render } from '@testing-library/react';

import App7Lib43 from './app7-lib43';

describe('App7Lib43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib43 />);
    expect(baseElement).toBeTruthy();
  });
});
