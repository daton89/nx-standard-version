import { render } from '@testing-library/react';

import App6Lib27 from './app6-lib27';

describe('App6Lib27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib27 />);
    expect(baseElement).toBeTruthy();
  });
});
