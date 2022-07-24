import { render } from '@testing-library/react';

import App4Lib24 from './app4-lib24';

describe('App4Lib24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib24 />);
    expect(baseElement).toBeTruthy();
  });
});
