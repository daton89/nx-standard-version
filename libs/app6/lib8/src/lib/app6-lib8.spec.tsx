import { render } from '@testing-library/react';

import App6Lib8 from './app6-lib8';

describe('App6Lib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib8 />);
    expect(baseElement).toBeTruthy();
  });
});
