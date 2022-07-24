import { render } from '@testing-library/react';

import App3Lib47 from './app3-lib47';

describe('App3Lib47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib47 />);
    expect(baseElement).toBeTruthy();
  });
});
