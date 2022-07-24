import { render } from '@testing-library/react';

import App1Lib38 from './app1-lib38';

describe('App1Lib38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib38 />);
    expect(baseElement).toBeTruthy();
  });
});
