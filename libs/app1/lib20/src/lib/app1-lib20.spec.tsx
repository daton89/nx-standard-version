import { render } from '@testing-library/react';

import App1Lib20 from './app1-lib20';

describe('App1Lib20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib20 />);
    expect(baseElement).toBeTruthy();
  });
});
