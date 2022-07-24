import { render } from '@testing-library/react';

import App1Lib14 from './app1-lib14';

describe('App1Lib14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib14 />);
    expect(baseElement).toBeTruthy();
  });
});
