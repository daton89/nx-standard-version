import { render } from '@testing-library/react';

import App7Lib36 from './app7-lib36';

describe('App7Lib36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib36 />);
    expect(baseElement).toBeTruthy();
  });
});
