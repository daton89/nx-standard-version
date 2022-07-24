import { render } from '@testing-library/react';

import App9Lib14 from './app9-lib14';

describe('App9Lib14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib14 />);
    expect(baseElement).toBeTruthy();
  });
});
