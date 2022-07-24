import { render } from '@testing-library/react';

import App5Lib36 from './app5-lib36';

describe('App5Lib36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib36 />);
    expect(baseElement).toBeTruthy();
  });
});
