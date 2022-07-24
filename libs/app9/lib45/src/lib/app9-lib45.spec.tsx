import { render } from '@testing-library/react';

import App9Lib45 from './app9-lib45';

describe('App9Lib45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib45 />);
    expect(baseElement).toBeTruthy();
  });
});
