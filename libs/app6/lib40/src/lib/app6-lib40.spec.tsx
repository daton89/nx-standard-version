import { render } from '@testing-library/react';

import App6Lib40 from './app6-lib40';

describe('App6Lib40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib40 />);
    expect(baseElement).toBeTruthy();
  });
});
