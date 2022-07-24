import { render } from '@testing-library/react';

import App8Lib17 from './app8-lib17';

describe('App8Lib17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib17 />);
    expect(baseElement).toBeTruthy();
  });
});
