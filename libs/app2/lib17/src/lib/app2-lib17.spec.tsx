import { render } from '@testing-library/react';

import App2Lib17 from './app2-lib17';

describe('App2Lib17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib17 />);
    expect(baseElement).toBeTruthy();
  });
});
