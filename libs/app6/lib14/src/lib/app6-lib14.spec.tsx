import { render } from '@testing-library/react';

import App6Lib14 from './app6-lib14';

describe('App6Lib14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib14 />);
    expect(baseElement).toBeTruthy();
  });
});
