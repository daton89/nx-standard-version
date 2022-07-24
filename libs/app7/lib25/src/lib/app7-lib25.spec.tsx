import { render } from '@testing-library/react';

import App7Lib25 from './app7-lib25';

describe('App7Lib25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib25 />);
    expect(baseElement).toBeTruthy();
  });
});
