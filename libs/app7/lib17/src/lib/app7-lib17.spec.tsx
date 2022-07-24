import { render } from '@testing-library/react';

import App7Lib17 from './app7-lib17';

describe('App7Lib17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib17 />);
    expect(baseElement).toBeTruthy();
  });
});
