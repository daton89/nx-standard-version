import { render } from '@testing-library/react';

import App1Lib17 from './app1-lib17';

describe('App1Lib17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib17 />);
    expect(baseElement).toBeTruthy();
  });
});
