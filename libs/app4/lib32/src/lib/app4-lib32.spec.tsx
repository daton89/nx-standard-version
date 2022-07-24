import { render } from '@testing-library/react';

import App4Lib32 from './app4-lib32';

describe('App4Lib32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib32 />);
    expect(baseElement).toBeTruthy();
  });
});
