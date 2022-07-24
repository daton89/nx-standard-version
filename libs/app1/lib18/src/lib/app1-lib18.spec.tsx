import { render } from '@testing-library/react';

import App1Lib18 from './app1-lib18';

describe('App1Lib18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib18 />);
    expect(baseElement).toBeTruthy();
  });
});
