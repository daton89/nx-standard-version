import { render } from '@testing-library/react';

import App2Lib47 from './app2-lib47';

describe('App2Lib47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib47 />);
    expect(baseElement).toBeTruthy();
  });
});
