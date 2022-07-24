import { render } from '@testing-library/react';

import App5Lib32 from './app5-lib32';

describe('App5Lib32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib32 />);
    expect(baseElement).toBeTruthy();
  });
});
