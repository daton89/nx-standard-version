import { render } from '@testing-library/react';

import App8Lib32 from './app8-lib32';

describe('App8Lib32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib32 />);
    expect(baseElement).toBeTruthy();
  });
});
