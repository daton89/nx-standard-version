import { render } from '@testing-library/react';

import App8Lib19 from './app8-lib19';

describe('App8Lib19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib19 />);
    expect(baseElement).toBeTruthy();
  });
});
