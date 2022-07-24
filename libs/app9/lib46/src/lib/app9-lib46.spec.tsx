import { render } from '@testing-library/react';

import App9Lib46 from './app9-lib46';

describe('App9Lib46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib46 />);
    expect(baseElement).toBeTruthy();
  });
});
