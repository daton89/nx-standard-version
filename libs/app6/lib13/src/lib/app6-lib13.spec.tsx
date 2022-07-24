import { render } from '@testing-library/react';

import App6Lib13 from './app6-lib13';

describe('App6Lib13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib13 />);
    expect(baseElement).toBeTruthy();
  });
});
