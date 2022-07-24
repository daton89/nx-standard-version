import { render } from '@testing-library/react';

import App1Lib5 from './app1-lib5';

describe('App1Lib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib5 />);
    expect(baseElement).toBeTruthy();
  });
});
