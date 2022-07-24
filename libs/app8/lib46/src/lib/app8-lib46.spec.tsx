import { render } from '@testing-library/react';

import App8Lib46 from './app8-lib46';

describe('App8Lib46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib46 />);
    expect(baseElement).toBeTruthy();
  });
});
