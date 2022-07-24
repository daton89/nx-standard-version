import { render } from '@testing-library/react';

import App1Lib23 from './app1-lib23';

describe('App1Lib23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib23 />);
    expect(baseElement).toBeTruthy();
  });
});
