import { render } from '@testing-library/react';

import App1Lib46 from './app1-lib46';

describe('App1Lib46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib46 />);
    expect(baseElement).toBeTruthy();
  });
});
