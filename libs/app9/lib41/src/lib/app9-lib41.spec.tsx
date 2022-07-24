import { render } from '@testing-library/react';

import App9Lib41 from './app9-lib41';

describe('App9Lib41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib41 />);
    expect(baseElement).toBeTruthy();
  });
});
