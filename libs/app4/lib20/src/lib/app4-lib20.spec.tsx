import { render } from '@testing-library/react';

import App4Lib20 from './app4-lib20';

describe('App4Lib20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib20 />);
    expect(baseElement).toBeTruthy();
  });
});
