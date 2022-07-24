import { render } from '@testing-library/react';

import App6Lib4 from './app6-lib4';

describe('App6Lib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib4 />);
    expect(baseElement).toBeTruthy();
  });
});
