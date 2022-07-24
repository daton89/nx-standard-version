import { render } from '@testing-library/react';

import App7Lib22 from './app7-lib22';

describe('App7Lib22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib22 />);
    expect(baseElement).toBeTruthy();
  });
});
