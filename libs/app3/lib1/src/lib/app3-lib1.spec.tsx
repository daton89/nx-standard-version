import { render } from '@testing-library/react';

import App3Lib1 from './app3-lib1';

describe('App3Lib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib1 />);
    expect(baseElement).toBeTruthy();
  });
});
