import { render } from '@testing-library/react';

import App6Lib5 from './app6-lib5';

describe('App6Lib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib5 />);
    expect(baseElement).toBeTruthy();
  });
});
