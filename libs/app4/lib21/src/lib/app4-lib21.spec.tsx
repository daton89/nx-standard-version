import { render } from '@testing-library/react';

import App4Lib21 from './app4-lib21';

describe('App4Lib21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib21 />);
    expect(baseElement).toBeTruthy();
  });
});
