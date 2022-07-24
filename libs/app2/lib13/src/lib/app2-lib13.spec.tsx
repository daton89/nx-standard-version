import { render } from '@testing-library/react';

import App2Lib13 from './app2-lib13';

describe('App2Lib13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib13 />);
    expect(baseElement).toBeTruthy();
  });
});
