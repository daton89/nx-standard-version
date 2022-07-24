import { render } from '@testing-library/react';

import App7Lib48 from './app7-lib48';

describe('App7Lib48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib48 />);
    expect(baseElement).toBeTruthy();
  });
});
