import { render } from '@testing-library/react';

import App8Lib2 from './app8-lib2';

describe('App8Lib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib2 />);
    expect(baseElement).toBeTruthy();
  });
});
