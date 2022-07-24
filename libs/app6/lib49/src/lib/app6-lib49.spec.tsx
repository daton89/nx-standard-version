import { render } from '@testing-library/react';

import App6Lib49 from './app6-lib49';

describe('App6Lib49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib49 />);
    expect(baseElement).toBeTruthy();
  });
});
