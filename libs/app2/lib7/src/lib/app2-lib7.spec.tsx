import { render } from '@testing-library/react';

import App2Lib7 from './app2-lib7';

describe('App2Lib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib7 />);
    expect(baseElement).toBeTruthy();
  });
});
