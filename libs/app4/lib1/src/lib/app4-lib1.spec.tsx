import { render } from '@testing-library/react';

import App4Lib1 from './app4-lib1';

describe('App4Lib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib1 />);
    expect(baseElement).toBeTruthy();
  });
});
