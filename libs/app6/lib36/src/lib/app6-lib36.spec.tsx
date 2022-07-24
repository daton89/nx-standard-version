import { render } from '@testing-library/react';

import App6Lib36 from './app6-lib36';

describe('App6Lib36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib36 />);
    expect(baseElement).toBeTruthy();
  });
});
