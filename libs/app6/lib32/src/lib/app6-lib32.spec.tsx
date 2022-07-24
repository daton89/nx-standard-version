import { render } from '@testing-library/react';

import App6Lib32 from './app6-lib32';

describe('App6Lib32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib32 />);
    expect(baseElement).toBeTruthy();
  });
});
