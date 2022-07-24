import { render } from '@testing-library/react';

import App5Lib34 from './app5-lib34';

describe('App5Lib34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib34 />);
    expect(baseElement).toBeTruthy();
  });
});
