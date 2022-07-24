import { render } from '@testing-library/react';

import App7Lib37 from './app7-lib37';

describe('App7Lib37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib37 />);
    expect(baseElement).toBeTruthy();
  });
});
