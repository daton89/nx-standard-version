import { render } from '@testing-library/react';

import App8Lib12 from './app8-lib12';

describe('App8Lib12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib12 />);
    expect(baseElement).toBeTruthy();
  });
});
