import { render } from '@testing-library/react';

import App7Lib47 from './app7-lib47';

describe('App7Lib47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib47 />);
    expect(baseElement).toBeTruthy();
  });
});
