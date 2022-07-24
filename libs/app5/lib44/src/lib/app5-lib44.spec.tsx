import { render } from '@testing-library/react';

import App5Lib44 from './app5-lib44';

describe('App5Lib44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib44 />);
    expect(baseElement).toBeTruthy();
  });
});
