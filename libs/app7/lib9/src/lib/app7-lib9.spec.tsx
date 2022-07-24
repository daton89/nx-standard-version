import { render } from '@testing-library/react';

import App7Lib9 from './app7-lib9';

describe('App7Lib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib9 />);
    expect(baseElement).toBeTruthy();
  });
});
