import { render } from '@testing-library/react';

import App6Lib12 from './app6-lib12';

describe('App6Lib12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib12 />);
    expect(baseElement).toBeTruthy();
  });
});
