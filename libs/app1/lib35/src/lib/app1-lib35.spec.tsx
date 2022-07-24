import { render } from '@testing-library/react';

import App1Lib35 from './app1-lib35';

describe('App1Lib35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib35 />);
    expect(baseElement).toBeTruthy();
  });
});
