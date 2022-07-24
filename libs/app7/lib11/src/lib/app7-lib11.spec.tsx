import { render } from '@testing-library/react';

import App7Lib11 from './app7-lib11';

describe('App7Lib11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib11 />);
    expect(baseElement).toBeTruthy();
  });
});
