import { render } from '@testing-library/react';

import App10Lib10 from './app10-lib10';

describe('App10Lib10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib10 />);
    expect(baseElement).toBeTruthy();
  });
});
