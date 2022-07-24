import { render } from '@testing-library/react';

import App9Lib19 from './app9-lib19';

describe('App9Lib19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib19 />);
    expect(baseElement).toBeTruthy();
  });
});
