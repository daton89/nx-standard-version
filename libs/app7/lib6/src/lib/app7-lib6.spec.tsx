import { render } from '@testing-library/react';

import App7Lib6 from './app7-lib6';

describe('App7Lib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib6 />);
    expect(baseElement).toBeTruthy();
  });
});
