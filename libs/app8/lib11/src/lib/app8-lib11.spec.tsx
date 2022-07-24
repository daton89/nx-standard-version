import { render } from '@testing-library/react';

import App8Lib11 from './app8-lib11';

describe('App8Lib11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib11 />);
    expect(baseElement).toBeTruthy();
  });
});
