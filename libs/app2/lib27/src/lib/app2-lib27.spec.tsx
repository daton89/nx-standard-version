import { render } from '@testing-library/react';

import App2Lib27 from './app2-lib27';

describe('App2Lib27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib27 />);
    expect(baseElement).toBeTruthy();
  });
});
