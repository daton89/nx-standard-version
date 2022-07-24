import { render } from '@testing-library/react';

import App4Lib11 from './app4-lib11';

describe('App4Lib11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib11 />);
    expect(baseElement).toBeTruthy();
  });
});
