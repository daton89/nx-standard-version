import { render } from '@testing-library/react';

import App6Lib37 from './app6-lib37';

describe('App6Lib37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib37 />);
    expect(baseElement).toBeTruthy();
  });
});
