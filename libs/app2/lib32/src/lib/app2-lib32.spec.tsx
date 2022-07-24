import { render } from '@testing-library/react';

import App2Lib32 from './app2-lib32';

describe('App2Lib32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib32 />);
    expect(baseElement).toBeTruthy();
  });
});
