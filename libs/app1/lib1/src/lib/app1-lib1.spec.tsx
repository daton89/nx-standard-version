import { render } from '@testing-library/react';

import App1Lib1 from './app1-lib1';

describe('App1Lib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib1 />);
    expect(baseElement).toBeTruthy();
  });
});
