import { render } from '@testing-library/react';

import App1Lib27 from './app1-lib27';

describe('App1Lib27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib27 />);
    expect(baseElement).toBeTruthy();
  });
});
