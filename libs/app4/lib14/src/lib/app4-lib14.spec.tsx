import { render } from '@testing-library/react';

import App4Lib14 from './app4-lib14';

describe('App4Lib14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib14 />);
    expect(baseElement).toBeTruthy();
  });
});
