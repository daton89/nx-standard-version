import { render } from '@testing-library/react';

import App10Lib39 from './app10-lib39';

describe('App10Lib39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib39 />);
    expect(baseElement).toBeTruthy();
  });
});
