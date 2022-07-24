import { render } from '@testing-library/react';

import App9Lib2 from './app9-lib2';

describe('App9Lib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib2 />);
    expect(baseElement).toBeTruthy();
  });
});
