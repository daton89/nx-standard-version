import { render } from '@testing-library/react';

import App3Lib33 from './app3-lib33';

describe('App3Lib33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib33 />);
    expect(baseElement).toBeTruthy();
  });
});
