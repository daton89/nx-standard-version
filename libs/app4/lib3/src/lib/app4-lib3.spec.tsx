import { render } from '@testing-library/react';

import App4Lib3 from './app4-lib3';

describe('App4Lib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib3 />);
    expect(baseElement).toBeTruthy();
  });
});
