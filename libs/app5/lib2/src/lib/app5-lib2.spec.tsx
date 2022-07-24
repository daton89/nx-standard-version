import { render } from '@testing-library/react';

import App5Lib2 from './app5-lib2';

describe('App5Lib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib2 />);
    expect(baseElement).toBeTruthy();
  });
});
