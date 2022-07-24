import { render } from '@testing-library/react';

import App5Lib9 from './app5-lib9';

describe('App5Lib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib9 />);
    expect(baseElement).toBeTruthy();
  });
});
