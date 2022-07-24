import { render } from '@testing-library/react';

import App3Lib34 from './app3-lib34';

describe('App3Lib34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib34 />);
    expect(baseElement).toBeTruthy();
  });
});
