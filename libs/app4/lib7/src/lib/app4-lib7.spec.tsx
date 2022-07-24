import { render } from '@testing-library/react';

import App4Lib7 from './app4-lib7';

describe('App4Lib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib7 />);
    expect(baseElement).toBeTruthy();
  });
});
