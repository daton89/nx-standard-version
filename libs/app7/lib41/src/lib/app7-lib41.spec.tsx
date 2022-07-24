import { render } from '@testing-library/react';

import App7Lib41 from './app7-lib41';

describe('App7Lib41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib41 />);
    expect(baseElement).toBeTruthy();
  });
});
