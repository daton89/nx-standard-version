import { render } from '@testing-library/react';

import App3Lib32 from './app3-lib32';

describe('App3Lib32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib32 />);
    expect(baseElement).toBeTruthy();
  });
});
