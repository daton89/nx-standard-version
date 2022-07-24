import { render } from '@testing-library/react';

import App1Lib45 from './app1-lib45';

describe('App1Lib45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib45 />);
    expect(baseElement).toBeTruthy();
  });
});
