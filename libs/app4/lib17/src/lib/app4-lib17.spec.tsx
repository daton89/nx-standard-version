import { render } from '@testing-library/react';

import App4Lib17 from './app4-lib17';

describe('App4Lib17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib17 />);
    expect(baseElement).toBeTruthy();
  });
});
