import { render } from '@testing-library/react';

import App7Lib16 from './app7-lib16';

describe('App7Lib16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib16 />);
    expect(baseElement).toBeTruthy();
  });
});
