import { render } from '@testing-library/react';

import App5Lib13 from './app5-lib13';

describe('App5Lib13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib13 />);
    expect(baseElement).toBeTruthy();
  });
});
