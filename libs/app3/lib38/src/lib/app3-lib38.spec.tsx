import { render } from '@testing-library/react';

import App3Lib38 from './app3-lib38';

describe('App3Lib38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib38 />);
    expect(baseElement).toBeTruthy();
  });
});
