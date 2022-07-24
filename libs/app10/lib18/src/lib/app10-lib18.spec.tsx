import { render } from '@testing-library/react';

import App10Lib18 from './app10-lib18';

describe('App10Lib18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib18 />);
    expect(baseElement).toBeTruthy();
  });
});
