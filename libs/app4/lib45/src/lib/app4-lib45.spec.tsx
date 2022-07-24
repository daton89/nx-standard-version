import { render } from '@testing-library/react';

import App4Lib45 from './app4-lib45';

describe('App4Lib45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib45 />);
    expect(baseElement).toBeTruthy();
  });
});
