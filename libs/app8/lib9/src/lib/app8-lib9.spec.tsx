import { render } from '@testing-library/react';

import App8Lib9 from './app8-lib9';

describe('App8Lib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib9 />);
    expect(baseElement).toBeTruthy();
  });
});
