import { render } from '@testing-library/react';

import App7Lib32 from './app7-lib32';

describe('App7Lib32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib32 />);
    expect(baseElement).toBeTruthy();
  });
});
