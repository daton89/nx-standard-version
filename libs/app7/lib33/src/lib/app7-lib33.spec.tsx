import { render } from '@testing-library/react';

import App7Lib33 from './app7-lib33';

describe('App7Lib33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib33 />);
    expect(baseElement).toBeTruthy();
  });
});
