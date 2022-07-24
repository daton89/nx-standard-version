import { render } from '@testing-library/react';

import App2Lib2 from './app2-lib2';

describe('App2Lib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib2 />);
    expect(baseElement).toBeTruthy();
  });
});
