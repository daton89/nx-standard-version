import { render } from '@testing-library/react';

import App3Lib29 from './app3-lib29';

describe('App3Lib29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib29 />);
    expect(baseElement).toBeTruthy();
  });
});
