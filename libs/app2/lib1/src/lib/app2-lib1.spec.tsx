import { render } from '@testing-library/react';

import App2Lib1 from './app2-lib1';

describe('App2Lib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib1 />);
    expect(baseElement).toBeTruthy();
  });
});
