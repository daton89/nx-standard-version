import { render } from '@testing-library/react';

import App10Lib44 from './app10-lib44';

describe('App10Lib44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib44 />);
    expect(baseElement).toBeTruthy();
  });
});
