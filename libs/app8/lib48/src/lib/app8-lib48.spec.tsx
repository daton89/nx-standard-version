import { render } from '@testing-library/react';

import App8Lib48 from './app8-lib48';

describe('App8Lib48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib48 />);
    expect(baseElement).toBeTruthy();
  });
});
