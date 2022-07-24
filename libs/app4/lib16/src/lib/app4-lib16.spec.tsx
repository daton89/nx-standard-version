import { render } from '@testing-library/react';

import App4Lib16 from './app4-lib16';

describe('App4Lib16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib16 />);
    expect(baseElement).toBeTruthy();
  });
});
