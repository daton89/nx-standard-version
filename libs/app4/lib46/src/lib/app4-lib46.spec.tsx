import { render } from '@testing-library/react';

import App4Lib46 from './app4-lib46';

describe('App4Lib46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib46 />);
    expect(baseElement).toBeTruthy();
  });
});
