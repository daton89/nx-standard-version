import { render } from '@testing-library/react';

import App2Lib4 from './app2-lib4';

describe('App2Lib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib4 />);
    expect(baseElement).toBeTruthy();
  });
});
