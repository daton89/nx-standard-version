import { render } from '@testing-library/react';

import App8Lib3 from './app8-lib3';

describe('App8Lib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib3 />);
    expect(baseElement).toBeTruthy();
  });
});
