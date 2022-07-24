import { render } from '@testing-library/react';

import App7Lib27 from './app7-lib27';

describe('App7Lib27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib27 />);
    expect(baseElement).toBeTruthy();
  });
});
