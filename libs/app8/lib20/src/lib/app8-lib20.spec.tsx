import { render } from '@testing-library/react';

import App8Lib20 from './app8-lib20';

describe('App8Lib20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib20 />);
    expect(baseElement).toBeTruthy();
  });
});
