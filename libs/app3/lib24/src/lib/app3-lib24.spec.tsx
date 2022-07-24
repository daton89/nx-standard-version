import { render } from '@testing-library/react';

import App3Lib24 from './app3-lib24';

describe('App3Lib24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib24 />);
    expect(baseElement).toBeTruthy();
  });
});
