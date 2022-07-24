import { render } from '@testing-library/react';

import App3Lib15 from './app3-lib15';

describe('App3Lib15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib15 />);
    expect(baseElement).toBeTruthy();
  });
});
