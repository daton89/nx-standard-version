import { render } from '@testing-library/react';

import App3Lib27 from './app3-lib27';

describe('App3Lib27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib27 />);
    expect(baseElement).toBeTruthy();
  });
});
