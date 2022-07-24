import { render } from '@testing-library/react';

import App7Lib24 from './app7-lib24';

describe('App7Lib24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib24 />);
    expect(baseElement).toBeTruthy();
  });
});
