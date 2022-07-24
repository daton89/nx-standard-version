import { render } from '@testing-library/react';

import App4Lib40 from './app4-lib40';

describe('App4Lib40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib40 />);
    expect(baseElement).toBeTruthy();
  });
});
