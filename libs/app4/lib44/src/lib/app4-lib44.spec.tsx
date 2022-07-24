import { render } from '@testing-library/react';

import App4Lib44 from './app4-lib44';

describe('App4Lib44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib44 />);
    expect(baseElement).toBeTruthy();
  });
});
