import { render } from '@testing-library/react';

import App1Lib47 from './app1-lib47';

describe('App1Lib47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib47 />);
    expect(baseElement).toBeTruthy();
  });
});
