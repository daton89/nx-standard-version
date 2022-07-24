import { render } from '@testing-library/react';

import App1Lib15 from './app1-lib15';

describe('App1Lib15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib15 />);
    expect(baseElement).toBeTruthy();
  });
});
