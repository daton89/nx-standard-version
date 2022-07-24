import { render } from '@testing-library/react';

import App4Lib9 from './app4-lib9';

describe('App4Lib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib9 />);
    expect(baseElement).toBeTruthy();
  });
});
