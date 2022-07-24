import { render } from '@testing-library/react';

import App4Lib36 from './app4-lib36';

describe('App4Lib36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib36 />);
    expect(baseElement).toBeTruthy();
  });
});
