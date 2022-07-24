import { render } from '@testing-library/react';

import App1Lib16 from './app1-lib16';

describe('App1Lib16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib16 />);
    expect(baseElement).toBeTruthy();
  });
});
