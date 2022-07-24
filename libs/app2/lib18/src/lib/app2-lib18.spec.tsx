import { render } from '@testing-library/react';

import App2Lib18 from './app2-lib18';

describe('App2Lib18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib18 />);
    expect(baseElement).toBeTruthy();
  });
});
