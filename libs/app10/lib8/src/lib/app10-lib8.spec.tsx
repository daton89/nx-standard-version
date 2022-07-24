import { render } from '@testing-library/react';

import App10Lib8 from './app10-lib8';

describe('App10Lib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib8 />);
    expect(baseElement).toBeTruthy();
  });
});
