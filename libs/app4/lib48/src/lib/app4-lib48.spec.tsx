import { render } from '@testing-library/react';

import App4Lib48 from './app4-lib48';

describe('App4Lib48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib48 />);
    expect(baseElement).toBeTruthy();
  });
});
