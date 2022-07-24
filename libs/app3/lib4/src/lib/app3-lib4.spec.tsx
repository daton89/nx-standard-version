import { render } from '@testing-library/react';

import App3Lib4 from './app3-lib4';

describe('App3Lib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib4 />);
    expect(baseElement).toBeTruthy();
  });
});
