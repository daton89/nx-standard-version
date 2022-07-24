import { render } from '@testing-library/react';

import App5Lib48 from './app5-lib48';

describe('App5Lib48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib48 />);
    expect(baseElement).toBeTruthy();
  });
});
