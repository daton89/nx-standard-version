import { render } from '@testing-library/react';

import App5Lib38 from './app5-lib38';

describe('App5Lib38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib38 />);
    expect(baseElement).toBeTruthy();
  });
});
