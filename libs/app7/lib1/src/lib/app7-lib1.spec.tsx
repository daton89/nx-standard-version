import { render } from '@testing-library/react';

import App7Lib1 from './app7-lib1';

describe('App7Lib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib1 />);
    expect(baseElement).toBeTruthy();
  });
});
