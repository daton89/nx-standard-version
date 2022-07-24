import { render } from '@testing-library/react';

import App2Lib34 from './app2-lib34';

describe('App2Lib34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib34 />);
    expect(baseElement).toBeTruthy();
  });
});
