import { render } from '@testing-library/react';

import App3Lib49 from './app3-lib49';

describe('App3Lib49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib49 />);
    expect(baseElement).toBeTruthy();
  });
});
