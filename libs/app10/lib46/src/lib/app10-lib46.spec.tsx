import { render } from '@testing-library/react';

import App10Lib46 from './app10-lib46';

describe('App10Lib46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib46 />);
    expect(baseElement).toBeTruthy();
  });
});
