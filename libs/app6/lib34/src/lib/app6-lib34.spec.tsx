import { render } from '@testing-library/react';

import App6Lib34 from './app6-lib34';

describe('App6Lib34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib34 />);
    expect(baseElement).toBeTruthy();
  });
});
