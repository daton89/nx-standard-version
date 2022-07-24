import { render } from '@testing-library/react';

import App9Lib20 from './app9-lib20';

describe('App9Lib20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib20 />);
    expect(baseElement).toBeTruthy();
  });
});
