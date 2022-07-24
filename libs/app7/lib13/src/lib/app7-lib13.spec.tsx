import { render } from '@testing-library/react';

import App7Lib13 from './app7-lib13';

describe('App7Lib13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib13 />);
    expect(baseElement).toBeTruthy();
  });
});
