import { render } from '@testing-library/react';

import App9Lib13 from './app9-lib13';

describe('App9Lib13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib13 />);
    expect(baseElement).toBeTruthy();
  });
});
