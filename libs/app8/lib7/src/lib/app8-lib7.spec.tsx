import { render } from '@testing-library/react';

import App8Lib7 from './app8-lib7';

describe('App8Lib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib7 />);
    expect(baseElement).toBeTruthy();
  });
});
