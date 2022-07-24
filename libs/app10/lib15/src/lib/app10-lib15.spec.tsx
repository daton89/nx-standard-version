import { render } from '@testing-library/react';

import App10Lib15 from './app10-lib15';

describe('App10Lib15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib15 />);
    expect(baseElement).toBeTruthy();
  });
});
