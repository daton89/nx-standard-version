import { render } from '@testing-library/react';

import App4Lib33 from './app4-lib33';

describe('App4Lib33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib33 />);
    expect(baseElement).toBeTruthy();
  });
});
