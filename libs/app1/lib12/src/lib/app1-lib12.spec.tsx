import { render } from '@testing-library/react';

import App1Lib12 from './app1-lib12';

describe('App1Lib12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib12 />);
    expect(baseElement).toBeTruthy();
  });
});
