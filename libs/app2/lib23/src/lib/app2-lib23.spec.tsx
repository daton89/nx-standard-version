import { render } from '@testing-library/react';

import App2Lib23 from './app2-lib23';

describe('App2Lib23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib23 />);
    expect(baseElement).toBeTruthy();
  });
});
