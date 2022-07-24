import { render } from '@testing-library/react';

import App4Lib47 from './app4-lib47';

describe('App4Lib47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib47 />);
    expect(baseElement).toBeTruthy();
  });
});
