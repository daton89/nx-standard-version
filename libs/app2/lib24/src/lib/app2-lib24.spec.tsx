import { render } from '@testing-library/react';

import App2Lib24 from './app2-lib24';

describe('App2Lib24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib24 />);
    expect(baseElement).toBeTruthy();
  });
});
