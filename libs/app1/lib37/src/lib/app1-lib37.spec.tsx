import { render } from '@testing-library/react';

import App1Lib37 from './app1-lib37';

describe('App1Lib37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib37 />);
    expect(baseElement).toBeTruthy();
  });
});
