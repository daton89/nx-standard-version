import { render } from '@testing-library/react';

import App9Lib7 from './app9-lib7';

describe('App9Lib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib7 />);
    expect(baseElement).toBeTruthy();
  });
});
