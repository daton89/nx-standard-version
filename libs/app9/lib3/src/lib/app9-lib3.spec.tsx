import { render } from '@testing-library/react';

import App9Lib3 from './app9-lib3';

describe('App9Lib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib3 />);
    expect(baseElement).toBeTruthy();
  });
});
