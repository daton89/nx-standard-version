import { render } from '@testing-library/react';

import App3Lib18 from './app3-lib18';

describe('App3Lib18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib18 />);
    expect(baseElement).toBeTruthy();
  });
});
