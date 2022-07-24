import { render } from '@testing-library/react';

import App7Lib29 from './app7-lib29';

describe('App7Lib29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib29 />);
    expect(baseElement).toBeTruthy();
  });
});
