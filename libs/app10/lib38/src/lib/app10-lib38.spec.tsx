import { render } from '@testing-library/react';

import App10Lib38 from './app10-lib38';

describe('App10Lib38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib38 />);
    expect(baseElement).toBeTruthy();
  });
});
