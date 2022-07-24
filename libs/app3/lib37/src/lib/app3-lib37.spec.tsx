import { render } from '@testing-library/react';

import App3Lib37 from './app3-lib37';

describe('App3Lib37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib37 />);
    expect(baseElement).toBeTruthy();
  });
});
