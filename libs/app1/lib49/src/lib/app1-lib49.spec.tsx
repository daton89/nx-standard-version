import { render } from '@testing-library/react';

import App1Lib49 from './app1-lib49';

describe('App1Lib49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib49 />);
    expect(baseElement).toBeTruthy();
  });
});
