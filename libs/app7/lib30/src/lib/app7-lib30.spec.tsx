import { render } from '@testing-library/react';

import App7Lib30 from './app7-lib30';

describe('App7Lib30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib30 />);
    expect(baseElement).toBeTruthy();
  });
});
