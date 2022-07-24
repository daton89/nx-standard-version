import { render } from '@testing-library/react';

import App10Lib13 from './app10-lib13';

describe('App10Lib13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib13 />);
    expect(baseElement).toBeTruthy();
  });
});
