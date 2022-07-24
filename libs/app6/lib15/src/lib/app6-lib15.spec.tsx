import { render } from '@testing-library/react';

import App6Lib15 from './app6-lib15';

describe('App6Lib15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib15 />);
    expect(baseElement).toBeTruthy();
  });
});
