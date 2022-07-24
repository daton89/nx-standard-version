import { render } from '@testing-library/react';

import App9Lib36 from './app9-lib36';

describe('App9Lib36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib36 />);
    expect(baseElement).toBeTruthy();
  });
});
