import { render } from '@testing-library/react';

import App1Lib7 from './app1-lib7';

describe('App1Lib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib7 />);
    expect(baseElement).toBeTruthy();
  });
});
