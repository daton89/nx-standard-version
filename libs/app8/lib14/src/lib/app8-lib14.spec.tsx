import { render } from '@testing-library/react';

import App8Lib14 from './app8-lib14';

describe('App8Lib14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib14 />);
    expect(baseElement).toBeTruthy();
  });
});
