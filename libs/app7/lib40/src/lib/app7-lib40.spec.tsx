import { render } from '@testing-library/react';

import App7Lib40 from './app7-lib40';

describe('App7Lib40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib40 />);
    expect(baseElement).toBeTruthy();
  });
});
