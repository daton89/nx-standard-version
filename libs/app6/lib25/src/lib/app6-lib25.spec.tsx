import { render } from '@testing-library/react';

import App6Lib25 from './app6-lib25';

describe('App6Lib25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib25 />);
    expect(baseElement).toBeTruthy();
  });
});
