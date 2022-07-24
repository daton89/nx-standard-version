import { render } from '@testing-library/react';

import App9Lib34 from './app9-lib34';

describe('App9Lib34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib34 />);
    expect(baseElement).toBeTruthy();
  });
});
