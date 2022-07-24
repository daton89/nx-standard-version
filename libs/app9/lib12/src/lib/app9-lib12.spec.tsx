import { render } from '@testing-library/react';

import App9Lib12 from './app9-lib12';

describe('App9Lib12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib12 />);
    expect(baseElement).toBeTruthy();
  });
});
