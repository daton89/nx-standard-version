import { render } from '@testing-library/react';

import App5Lib37 from './app5-lib37';

describe('App5Lib37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib37 />);
    expect(baseElement).toBeTruthy();
  });
});
