import { render } from '@testing-library/react';

import App9Lib38 from './app9-lib38';

describe('App9Lib38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib38 />);
    expect(baseElement).toBeTruthy();
  });
});
