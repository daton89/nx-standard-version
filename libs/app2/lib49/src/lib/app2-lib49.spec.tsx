import { render } from '@testing-library/react';

import App2Lib49 from './app2-lib49';

describe('App2Lib49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib49 />);
    expect(baseElement).toBeTruthy();
  });
});
