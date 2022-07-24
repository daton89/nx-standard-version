import { render } from '@testing-library/react';

import App8Lib13 from './app8-lib13';

describe('App8Lib13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib13 />);
    expect(baseElement).toBeTruthy();
  });
});
