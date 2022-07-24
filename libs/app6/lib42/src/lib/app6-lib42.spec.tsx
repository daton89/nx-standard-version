import { render } from '@testing-library/react';

import App6Lib42 from './app6-lib42';

describe('App6Lib42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib42 />);
    expect(baseElement).toBeTruthy();
  });
});
