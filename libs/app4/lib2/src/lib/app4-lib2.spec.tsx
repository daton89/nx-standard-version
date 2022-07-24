import { render } from '@testing-library/react';

import App4Lib2 from './app4-lib2';

describe('App4Lib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib2 />);
    expect(baseElement).toBeTruthy();
  });
});
