import { render } from '@testing-library/react';

import App2Lib20 from './app2-lib20';

describe('App2Lib20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib20 />);
    expect(baseElement).toBeTruthy();
  });
});
