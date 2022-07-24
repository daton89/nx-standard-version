import { render } from '@testing-library/react';

import App7Lib28 from './app7-lib28';

describe('App7Lib28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib28 />);
    expect(baseElement).toBeTruthy();
  });
});
