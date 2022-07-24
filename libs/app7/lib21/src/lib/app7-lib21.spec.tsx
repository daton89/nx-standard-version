import { render } from '@testing-library/react';

import App7Lib21 from './app7-lib21';

describe('App7Lib21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib21 />);
    expect(baseElement).toBeTruthy();
  });
});
