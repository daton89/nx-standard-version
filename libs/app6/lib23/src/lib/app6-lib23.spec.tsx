import { render } from '@testing-library/react';

import App6Lib23 from './app6-lib23';

describe('App6Lib23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib23 />);
    expect(baseElement).toBeTruthy();
  });
});
