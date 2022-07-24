import { render } from '@testing-library/react';

import App5Lib46 from './app5-lib46';

describe('App5Lib46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib46 />);
    expect(baseElement).toBeTruthy();
  });
});
