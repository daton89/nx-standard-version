import { render } from '@testing-library/react';

import App2Lib36 from './app2-lib36';

describe('App2Lib36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib36 />);
    expect(baseElement).toBeTruthy();
  });
});
