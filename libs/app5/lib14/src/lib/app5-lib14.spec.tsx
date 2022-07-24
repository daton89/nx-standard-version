import { render } from '@testing-library/react';

import App5Lib14 from './app5-lib14';

describe('App5Lib14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib14 />);
    expect(baseElement).toBeTruthy();
  });
});
