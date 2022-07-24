import { render } from '@testing-library/react';

import App1Lib4 from './app1-lib4';

describe('App1Lib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib4 />);
    expect(baseElement).toBeTruthy();
  });
});
