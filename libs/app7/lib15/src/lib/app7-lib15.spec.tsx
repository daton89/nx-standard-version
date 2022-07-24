import { render } from '@testing-library/react';

import App7Lib15 from './app7-lib15';

describe('App7Lib15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib15 />);
    expect(baseElement).toBeTruthy();
  });
});
