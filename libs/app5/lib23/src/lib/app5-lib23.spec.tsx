import { render } from '@testing-library/react';

import App5Lib23 from './app5-lib23';

describe('App5Lib23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib23 />);
    expect(baseElement).toBeTruthy();
  });
});
