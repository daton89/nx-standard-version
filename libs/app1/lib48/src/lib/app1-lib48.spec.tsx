import { render } from '@testing-library/react';

import App1Lib48 from './app1-lib48';

describe('App1Lib48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib48 />);
    expect(baseElement).toBeTruthy();
  });
});
