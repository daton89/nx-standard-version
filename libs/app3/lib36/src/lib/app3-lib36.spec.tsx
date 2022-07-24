import { render } from '@testing-library/react';

import App3Lib36 from './app3-lib36';

describe('App3Lib36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib36 />);
    expect(baseElement).toBeTruthy();
  });
});
