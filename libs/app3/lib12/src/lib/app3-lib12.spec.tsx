import { render } from '@testing-library/react';

import App3Lib12 from './app3-lib12';

describe('App3Lib12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib12 />);
    expect(baseElement).toBeTruthy();
  });
});
