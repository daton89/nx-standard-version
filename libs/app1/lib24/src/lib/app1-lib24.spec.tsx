import { render } from '@testing-library/react';

import App1Lib24 from './app1-lib24';

describe('App1Lib24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib24 />);
    expect(baseElement).toBeTruthy();
  });
});
