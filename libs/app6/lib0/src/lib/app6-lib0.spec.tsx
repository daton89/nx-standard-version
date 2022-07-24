import { render } from '@testing-library/react';

import App6Lib0 from './app6-lib0';

describe('App6Lib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib0 />);
    expect(baseElement).toBeTruthy();
  });
});
