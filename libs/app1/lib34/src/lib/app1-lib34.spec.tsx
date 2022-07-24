import { render } from '@testing-library/react';

import App1Lib34 from './app1-lib34';

describe('App1Lib34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib34 />);
    expect(baseElement).toBeTruthy();
  });
});
