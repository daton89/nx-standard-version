import { render } from '@testing-library/react';

import App1Lib21 from './app1-lib21';

describe('App1Lib21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib21 />);
    expect(baseElement).toBeTruthy();
  });
});
