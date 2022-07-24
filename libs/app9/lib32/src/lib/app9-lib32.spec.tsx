import { render } from '@testing-library/react';

import App9Lib32 from './app9-lib32';

describe('App9Lib32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib32 />);
    expect(baseElement).toBeTruthy();
  });
});
