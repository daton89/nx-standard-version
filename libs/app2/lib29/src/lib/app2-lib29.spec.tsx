import { render } from '@testing-library/react';

import App2Lib29 from './app2-lib29';

describe('App2Lib29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib29 />);
    expect(baseElement).toBeTruthy();
  });
});
