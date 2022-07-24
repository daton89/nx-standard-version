import { render } from '@testing-library/react';

import App10Lib0 from './app10-lib0';

describe('App10Lib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib0 />);
    expect(baseElement).toBeTruthy();
  });
});
