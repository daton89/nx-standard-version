import { render } from '@testing-library/react';

import App8Lib41 from './app8-lib41';

describe('App8Lib41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib41 />);
    expect(baseElement).toBeTruthy();
  });
});
