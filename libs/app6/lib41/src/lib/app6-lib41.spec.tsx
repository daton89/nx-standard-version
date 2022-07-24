import { render } from '@testing-library/react';

import App6Lib41 from './app6-lib41';

describe('App6Lib41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib41 />);
    expect(baseElement).toBeTruthy();
  });
});
