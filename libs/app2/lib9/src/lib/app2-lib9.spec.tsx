import { render } from '@testing-library/react';

import App2Lib9 from './app2-lib9';

describe('App2Lib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib9 />);
    expect(baseElement).toBeTruthy();
  });
});
