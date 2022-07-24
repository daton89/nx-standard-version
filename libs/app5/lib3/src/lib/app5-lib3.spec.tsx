import { render } from '@testing-library/react';

import App5Lib3 from './app5-lib3';

describe('App5Lib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib3 />);
    expect(baseElement).toBeTruthy();
  });
});
