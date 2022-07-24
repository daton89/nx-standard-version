import { render } from '@testing-library/react';

import App9Lib47 from './app9-lib47';

describe('App9Lib47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib47 />);
    expect(baseElement).toBeTruthy();
  });
});
