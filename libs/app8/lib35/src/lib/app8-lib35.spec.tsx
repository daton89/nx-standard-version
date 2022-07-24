import { render } from '@testing-library/react';

import App8Lib35 from './app8-lib35';

describe('App8Lib35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib35 />);
    expect(baseElement).toBeTruthy();
  });
});
