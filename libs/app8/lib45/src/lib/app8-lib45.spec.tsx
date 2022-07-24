import { render } from '@testing-library/react';

import App8Lib45 from './app8-lib45';

describe('App8Lib45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib45 />);
    expect(baseElement).toBeTruthy();
  });
});
