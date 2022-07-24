import { render } from '@testing-library/react';

import App4Lib27 from './app4-lib27';

describe('App4Lib27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib27 />);
    expect(baseElement).toBeTruthy();
  });
});
