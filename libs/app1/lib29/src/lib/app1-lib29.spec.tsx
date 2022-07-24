import { render } from '@testing-library/react';

import App1Lib29 from './app1-lib29';

describe('App1Lib29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib29 />);
    expect(baseElement).toBeTruthy();
  });
});
