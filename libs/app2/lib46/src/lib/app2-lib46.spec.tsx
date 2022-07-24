import { render } from '@testing-library/react';

import App2Lib46 from './app2-lib46';

describe('App2Lib46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib46 />);
    expect(baseElement).toBeTruthy();
  });
});
