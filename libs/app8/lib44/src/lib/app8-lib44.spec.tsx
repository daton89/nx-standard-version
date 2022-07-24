import { render } from '@testing-library/react';

import App8Lib44 from './app8-lib44';

describe('App8Lib44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib44 />);
    expect(baseElement).toBeTruthy();
  });
});
