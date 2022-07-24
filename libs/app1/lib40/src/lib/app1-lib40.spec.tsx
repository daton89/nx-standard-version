import { render } from '@testing-library/react';

import App1Lib40 from './app1-lib40';

describe('App1Lib40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib40 />);
    expect(baseElement).toBeTruthy();
  });
});
