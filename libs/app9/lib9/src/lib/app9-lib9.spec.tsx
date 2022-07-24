import { render } from '@testing-library/react';

import App9Lib9 from './app9-lib9';

describe('App9Lib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib9 />);
    expect(baseElement).toBeTruthy();
  });
});
