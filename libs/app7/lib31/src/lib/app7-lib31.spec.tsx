import { render } from '@testing-library/react';

import App7Lib31 from './app7-lib31';

describe('App7Lib31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib31 />);
    expect(baseElement).toBeTruthy();
  });
});
