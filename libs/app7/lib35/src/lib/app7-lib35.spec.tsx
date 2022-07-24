import { render } from '@testing-library/react';

import App7Lib35 from './app7-lib35';

describe('App7Lib35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib35 />);
    expect(baseElement).toBeTruthy();
  });
});
