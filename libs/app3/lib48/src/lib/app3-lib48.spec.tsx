import { render } from '@testing-library/react';

import App3Lib48 from './app3-lib48';

describe('App3Lib48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib48 />);
    expect(baseElement).toBeTruthy();
  });
});
