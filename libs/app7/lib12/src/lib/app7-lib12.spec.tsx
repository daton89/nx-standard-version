import { render } from '@testing-library/react';

import App7Lib12 from './app7-lib12';

describe('App7Lib12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib12 />);
    expect(baseElement).toBeTruthy();
  });
});
