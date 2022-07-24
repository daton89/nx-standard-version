import { render } from '@testing-library/react';

import App2Lib15 from './app2-lib15';

describe('App2Lib15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib15 />);
    expect(baseElement).toBeTruthy();
  });
});
