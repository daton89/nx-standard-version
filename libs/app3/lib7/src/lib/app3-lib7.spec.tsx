import { render } from '@testing-library/react';

import App3Lib7 from './app3-lib7';

describe('App3Lib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib7 />);
    expect(baseElement).toBeTruthy();
  });
});
