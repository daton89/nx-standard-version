import { render } from '@testing-library/react';

import App2Lib37 from './app2-lib37';

describe('App2Lib37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib37 />);
    expect(baseElement).toBeTruthy();
  });
});
