import { render } from '@testing-library/react';

import App8Lib36 from './app8-lib36';

describe('App8Lib36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib36 />);
    expect(baseElement).toBeTruthy();
  });
});
