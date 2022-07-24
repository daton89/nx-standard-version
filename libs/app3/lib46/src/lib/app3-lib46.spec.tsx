import { render } from '@testing-library/react';

import App3Lib46 from './app3-lib46';

describe('App3Lib46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib46 />);
    expect(baseElement).toBeTruthy();
  });
});
