import { render } from '@testing-library/react';

import App1Lib22 from './app1-lib22';

describe('App1Lib22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib22 />);
    expect(baseElement).toBeTruthy();
  });
});
