import { render } from '@testing-library/react';

import App6Lib44 from './app6-lib44';

describe('App6Lib44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib44 />);
    expect(baseElement).toBeTruthy();
  });
});
