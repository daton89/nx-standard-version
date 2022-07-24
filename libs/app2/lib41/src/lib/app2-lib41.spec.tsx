import { render } from '@testing-library/react';

import App2Lib41 from './app2-lib41';

describe('App2Lib41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib41 />);
    expect(baseElement).toBeTruthy();
  });
});
