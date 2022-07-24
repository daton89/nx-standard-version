import { render } from '@testing-library/react';

import App6Lib7 from './app6-lib7';

describe('App6Lib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib7 />);
    expect(baseElement).toBeTruthy();
  });
});
