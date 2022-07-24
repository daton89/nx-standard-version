import { render } from '@testing-library/react';

import App3Lib20 from './app3-lib20';

describe('App3Lib20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib20 />);
    expect(baseElement).toBeTruthy();
  });
});
