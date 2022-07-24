import { render } from '@testing-library/react';

import App5Lib43 from './app5-lib43';

describe('App5Lib43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib43 />);
    expect(baseElement).toBeTruthy();
  });
});
