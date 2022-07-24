import { render } from '@testing-library/react';

import App7Lib2 from './app7-lib2';

describe('App7Lib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib2 />);
    expect(baseElement).toBeTruthy();
  });
});
