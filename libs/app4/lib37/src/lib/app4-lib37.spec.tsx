import { render } from '@testing-library/react';

import App4Lib37 from './app4-lib37';

describe('App4Lib37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib37 />);
    expect(baseElement).toBeTruthy();
  });
});
