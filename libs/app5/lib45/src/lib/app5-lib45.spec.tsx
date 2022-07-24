import { render } from '@testing-library/react';

import App5Lib45 from './app5-lib45';

describe('App5Lib45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib45 />);
    expect(baseElement).toBeTruthy();
  });
});
