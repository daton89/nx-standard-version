import { render } from '@testing-library/react';

import App3Lib23 from './app3-lib23';

describe('App3Lib23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib23 />);
    expect(baseElement).toBeTruthy();
  });
});
