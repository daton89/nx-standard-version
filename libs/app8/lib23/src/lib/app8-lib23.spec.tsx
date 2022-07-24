import { render } from '@testing-library/react';

import App8Lib23 from './app8-lib23';

describe('App8Lib23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib23 />);
    expect(baseElement).toBeTruthy();
  });
});
