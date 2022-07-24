import { render } from '@testing-library/react';

import App1Lib32 from './app1-lib32';

describe('App1Lib32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib32 />);
    expect(baseElement).toBeTruthy();
  });
});
