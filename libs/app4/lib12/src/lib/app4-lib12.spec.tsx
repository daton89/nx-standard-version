import { render } from '@testing-library/react';

import App4Lib12 from './app4-lib12';

describe('App4Lib12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib12 />);
    expect(baseElement).toBeTruthy();
  });
});
