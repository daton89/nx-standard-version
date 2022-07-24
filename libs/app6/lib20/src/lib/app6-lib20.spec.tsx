import { render } from '@testing-library/react';

import App6Lib20 from './app6-lib20';

describe('App6Lib20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib20 />);
    expect(baseElement).toBeTruthy();
  });
});
