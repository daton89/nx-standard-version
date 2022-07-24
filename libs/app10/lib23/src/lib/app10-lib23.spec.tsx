import { render } from '@testing-library/react';

import App10Lib23 from './app10-lib23';

describe('App10Lib23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib23 />);
    expect(baseElement).toBeTruthy();
  });
});
