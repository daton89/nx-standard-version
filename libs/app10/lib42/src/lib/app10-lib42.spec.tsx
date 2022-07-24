import { render } from '@testing-library/react';

import App10Lib42 from './app10-lib42';

describe('App10Lib42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib42 />);
    expect(baseElement).toBeTruthy();
  });
});
