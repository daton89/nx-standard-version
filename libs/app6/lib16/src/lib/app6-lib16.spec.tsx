import { render } from '@testing-library/react';

import App6Lib16 from './app6-lib16';

describe('App6Lib16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib16 />);
    expect(baseElement).toBeTruthy();
  });
});
