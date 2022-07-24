import { render } from '@testing-library/react';

import App8Lib34 from './app8-lib34';

describe('App8Lib34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib34 />);
    expect(baseElement).toBeTruthy();
  });
});
