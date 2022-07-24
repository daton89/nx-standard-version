import { render } from '@testing-library/react';

import App3Lib17 from './app3-lib17';

describe('App3Lib17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib17 />);
    expect(baseElement).toBeTruthy();
  });
});
