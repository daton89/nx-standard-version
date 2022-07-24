import { render } from '@testing-library/react';

import App4Lib23 from './app4-lib23';

describe('App4Lib23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib23 />);
    expect(baseElement).toBeTruthy();
  });
});
