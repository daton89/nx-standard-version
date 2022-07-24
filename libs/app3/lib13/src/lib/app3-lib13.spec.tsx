import { render } from '@testing-library/react';

import App3Lib13 from './app3-lib13';

describe('App3Lib13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib13 />);
    expect(baseElement).toBeTruthy();
  });
});
