import { render } from '@testing-library/react';

import App8Lib1 from './app8-lib1';

describe('App8Lib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib1 />);
    expect(baseElement).toBeTruthy();
  });
});
