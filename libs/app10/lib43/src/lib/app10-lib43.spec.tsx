import { render } from '@testing-library/react';

import App10Lib43 from './app10-lib43';

describe('App10Lib43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib43 />);
    expect(baseElement).toBeTruthy();
  });
});
