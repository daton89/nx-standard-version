import { render } from '@testing-library/react';

import App1Lib9 from './app1-lib9';

describe('App1Lib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib9 />);
    expect(baseElement).toBeTruthy();
  });
});
