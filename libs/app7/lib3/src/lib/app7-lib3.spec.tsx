import { render } from '@testing-library/react';

import App7Lib3 from './app7-lib3';

describe('App7Lib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib3 />);
    expect(baseElement).toBeTruthy();
  });
});
