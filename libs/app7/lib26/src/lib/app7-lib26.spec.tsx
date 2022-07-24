import { render } from '@testing-library/react';

import App7Lib26 from './app7-lib26';

describe('App7Lib26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib26 />);
    expect(baseElement).toBeTruthy();
  });
});
