import { render } from '@testing-library/react';

import App9Lib35 from './app9-lib35';

describe('App9Lib35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib35 />);
    expect(baseElement).toBeTruthy();
  });
});
