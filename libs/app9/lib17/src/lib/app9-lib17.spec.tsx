import { render } from '@testing-library/react';

import App9Lib17 from './app9-lib17';

describe('App9Lib17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib17 />);
    expect(baseElement).toBeTruthy();
  });
});
