import { render } from '@testing-library/react';

import App3Lib9 from './app3-lib9';

describe('App3Lib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib9 />);
    expect(baseElement).toBeTruthy();
  });
});
