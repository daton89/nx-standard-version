import { render } from '@testing-library/react';

import App4Lib41 from './app4-lib41';

describe('App4Lib41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib41 />);
    expect(baseElement).toBeTruthy();
  });
});
