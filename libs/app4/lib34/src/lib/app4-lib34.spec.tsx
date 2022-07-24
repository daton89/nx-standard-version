import { render } from '@testing-library/react';

import App4Lib34 from './app4-lib34';

describe('App4Lib34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib34 />);
    expect(baseElement).toBeTruthy();
  });
});
