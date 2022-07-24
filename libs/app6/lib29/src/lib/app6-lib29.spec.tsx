import { render } from '@testing-library/react';

import App6Lib29 from './app6-lib29';

describe('App6Lib29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib29 />);
    expect(baseElement).toBeTruthy();
  });
});
