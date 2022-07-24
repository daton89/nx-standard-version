import { render } from '@testing-library/react';

import App10Lib34 from './app10-lib34';

describe('App10Lib34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib34 />);
    expect(baseElement).toBeTruthy();
  });
});
