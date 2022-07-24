import { render } from '@testing-library/react';

import App9Lib44 from './app9-lib44';

describe('App9Lib44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib44 />);
    expect(baseElement).toBeTruthy();
  });
});
