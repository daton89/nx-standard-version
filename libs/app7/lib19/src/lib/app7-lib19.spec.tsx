import { render } from '@testing-library/react';

import App7Lib19 from './app7-lib19';

describe('App7Lib19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib19 />);
    expect(baseElement).toBeTruthy();
  });
});
