import { render } from '@testing-library/react';

import App3Lib40 from './app3-lib40';

describe('App3Lib40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib40 />);
    expect(baseElement).toBeTruthy();
  });
});
