import { render } from '@testing-library/react';

import App4Lib42 from './app4-lib42';

describe('App4Lib42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib42 />);
    expect(baseElement).toBeTruthy();
  });
});
