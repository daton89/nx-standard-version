import { render } from '@testing-library/react';

import App5Lib20 from './app5-lib20';

describe('App5Lib20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib20 />);
    expect(baseElement).toBeTruthy();
  });
});
