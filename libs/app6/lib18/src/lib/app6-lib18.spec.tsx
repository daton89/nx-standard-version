import { render } from '@testing-library/react';

import App6Lib18 from './app6-lib18';

describe('App6Lib18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib18 />);
    expect(baseElement).toBeTruthy();
  });
});
