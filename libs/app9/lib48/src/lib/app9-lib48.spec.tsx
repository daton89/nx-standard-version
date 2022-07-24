import { render } from '@testing-library/react';

import App9Lib48 from './app9-lib48';

describe('App9Lib48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib48 />);
    expect(baseElement).toBeTruthy();
  });
});
