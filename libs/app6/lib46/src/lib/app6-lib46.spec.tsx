import { render } from '@testing-library/react';

import App6Lib46 from './app6-lib46';

describe('App6Lib46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib46 />);
    expect(baseElement).toBeTruthy();
  });
});
