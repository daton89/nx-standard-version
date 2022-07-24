import { render } from '@testing-library/react';

import App2Lib12 from './app2-lib12';

describe('App2Lib12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib12 />);
    expect(baseElement).toBeTruthy();
  });
});
