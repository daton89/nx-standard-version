import { render } from '@testing-library/react';

import App4Lib13 from './app4-lib13';

describe('App4Lib13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib13 />);
    expect(baseElement).toBeTruthy();
  });
});
