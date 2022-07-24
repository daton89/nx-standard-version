import { render } from '@testing-library/react';

import App5Lib19 from './app5-lib19';

describe('App5Lib19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib19 />);
    expect(baseElement).toBeTruthy();
  });
});
