import { render } from '@testing-library/react';

import App6Lib47 from './app6-lib47';

describe('App6Lib47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib47 />);
    expect(baseElement).toBeTruthy();
  });
});
