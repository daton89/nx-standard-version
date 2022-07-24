import { render } from '@testing-library/react';

import App6Lib17 from './app6-lib17';

describe('App6Lib17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib17 />);
    expect(baseElement).toBeTruthy();
  });
});
