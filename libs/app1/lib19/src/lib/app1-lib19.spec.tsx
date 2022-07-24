import { render } from '@testing-library/react';

import App1Lib19 from './app1-lib19';

describe('App1Lib19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib19 />);
    expect(baseElement).toBeTruthy();
  });
});
