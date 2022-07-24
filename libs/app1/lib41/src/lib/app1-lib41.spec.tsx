import { render } from '@testing-library/react';

import App1Lib41 from './app1-lib41';

describe('App1Lib41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib41 />);
    expect(baseElement).toBeTruthy();
  });
});
