import { render } from '@testing-library/react';

import App10Lib20 from './app10-lib20';

describe('App10Lib20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib20 />);
    expect(baseElement).toBeTruthy();
  });
});
