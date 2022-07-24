import { render } from '@testing-library/react';

import App6Lib10 from './app6-lib10';

describe('App6Lib10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib10 />);
    expect(baseElement).toBeTruthy();
  });
});
