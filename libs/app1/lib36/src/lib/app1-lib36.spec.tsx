import { render } from '@testing-library/react';

import App1Lib36 from './app1-lib36';

describe('App1Lib36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib36 />);
    expect(baseElement).toBeTruthy();
  });
});
