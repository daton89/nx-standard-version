import { render } from '@testing-library/react';

import App5Lib35 from './app5-lib35';

describe('App5Lib35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib35 />);
    expect(baseElement).toBeTruthy();
  });
});
