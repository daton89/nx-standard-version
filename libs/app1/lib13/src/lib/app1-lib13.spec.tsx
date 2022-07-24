import { render } from '@testing-library/react';

import App1Lib13 from './app1-lib13';

describe('App1Lib13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib13 />);
    expect(baseElement).toBeTruthy();
  });
});
