import { render } from '@testing-library/react';

import App2Lib48 from './app2-lib48';

describe('App2Lib48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib48 />);
    expect(baseElement).toBeTruthy();
  });
});
