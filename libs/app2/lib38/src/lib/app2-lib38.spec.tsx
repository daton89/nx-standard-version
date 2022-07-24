import { render } from '@testing-library/react';

import App2Lib38 from './app2-lib38';

describe('App2Lib38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib38 />);
    expect(baseElement).toBeTruthy();
  });
});
