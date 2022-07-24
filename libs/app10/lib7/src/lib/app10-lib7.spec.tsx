import { render } from '@testing-library/react';

import App10Lib7 from './app10-lib7';

describe('App10Lib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib7 />);
    expect(baseElement).toBeTruthy();
  });
});
