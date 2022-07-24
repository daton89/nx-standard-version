import { render } from '@testing-library/react';

import App5Lib1 from './app5-lib1';

describe('App5Lib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib1 />);
    expect(baseElement).toBeTruthy();
  });
});
