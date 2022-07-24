import { render } from '@testing-library/react';

import App7Lib45 from './app7-lib45';

describe('App7Lib45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib45 />);
    expect(baseElement).toBeTruthy();
  });
});
