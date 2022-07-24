import { render } from '@testing-library/react';

import App7Lib38 from './app7-lib38';

describe('App7Lib38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7Lib38 />);
    expect(baseElement).toBeTruthy();
  });
});
