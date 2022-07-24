import { render } from '@testing-library/react';

import App2Lib14 from './app2-lib14';

describe('App2Lib14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib14 />);
    expect(baseElement).toBeTruthy();
  });
});
