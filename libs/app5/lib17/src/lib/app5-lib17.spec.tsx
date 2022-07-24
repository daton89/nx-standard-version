import { render } from '@testing-library/react';

import App5Lib17 from './app5-lib17';

describe('App5Lib17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib17 />);
    expect(baseElement).toBeTruthy();
  });
});
