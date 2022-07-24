import { render } from '@testing-library/react';

import App9Lib23 from './app9-lib23';

describe('App9Lib23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib23 />);
    expect(baseElement).toBeTruthy();
  });
});
