import { render } from '@testing-library/react';

import App8Lib47 from './app8-lib47';

describe('App8Lib47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib47 />);
    expect(baseElement).toBeTruthy();
  });
});
