import { render } from '@testing-library/react';

import App4Lib35 from './app4-lib35';

describe('App4Lib35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib35 />);
    expect(baseElement).toBeTruthy();
  });
});
