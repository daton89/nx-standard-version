import { render } from '@testing-library/react';

import App2Lib40 from './app2-lib40';

describe('App2Lib40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib40 />);
    expect(baseElement).toBeTruthy();
  });
});
