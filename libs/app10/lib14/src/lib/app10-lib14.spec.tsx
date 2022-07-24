import { render } from '@testing-library/react';

import App10Lib14 from './app10-lib14';

describe('App10Lib14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib14 />);
    expect(baseElement).toBeTruthy();
  });
});
