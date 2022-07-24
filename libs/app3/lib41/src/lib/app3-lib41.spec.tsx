import { render } from '@testing-library/react';

import App3Lib41 from './app3-lib41';

describe('App3Lib41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib41 />);
    expect(baseElement).toBeTruthy();
  });
});
