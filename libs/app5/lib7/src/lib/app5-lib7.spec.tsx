import { render } from '@testing-library/react';

import App5Lib7 from './app5-lib7';

describe('App5Lib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib7 />);
    expect(baseElement).toBeTruthy();
  });
});
