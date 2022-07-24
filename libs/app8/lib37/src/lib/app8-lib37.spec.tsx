import { render } from '@testing-library/react';

import App8Lib37 from './app8-lib37';

describe('App8Lib37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib37 />);
    expect(baseElement).toBeTruthy();
  });
});
