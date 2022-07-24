import { render } from '@testing-library/react';

import App4Lib19 from './app4-lib19';

describe('App4Lib19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib19 />);
    expect(baseElement).toBeTruthy();
  });
});
