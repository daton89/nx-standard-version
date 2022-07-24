import { render } from '@testing-library/react';

import App2Lib5 from './app2-lib5';

describe('App2Lib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib5 />);
    expect(baseElement).toBeTruthy();
  });
});
