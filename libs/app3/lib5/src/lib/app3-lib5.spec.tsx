import { render } from '@testing-library/react';

import App3Lib5 from './app3-lib5';

describe('App3Lib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib5 />);
    expect(baseElement).toBeTruthy();
  });
});
