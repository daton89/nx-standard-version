import { render } from '@testing-library/react';

import App4Lib18 from './app4-lib18';

describe('App4Lib18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib18 />);
    expect(baseElement).toBeTruthy();
  });
});
