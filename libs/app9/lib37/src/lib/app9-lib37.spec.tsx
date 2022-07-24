import { render } from '@testing-library/react';

import App9Lib37 from './app9-lib37';

describe('App9Lib37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib37 />);
    expect(baseElement).toBeTruthy();
  });
});
