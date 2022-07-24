import { render } from '@testing-library/react';

import App3Lib14 from './app3-lib14';

describe('App3Lib14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib14 />);
    expect(baseElement).toBeTruthy();
  });
});
