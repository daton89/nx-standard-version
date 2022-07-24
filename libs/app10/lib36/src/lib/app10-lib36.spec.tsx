import { render } from '@testing-library/react';

import App10Lib36 from './app10-lib36';

describe('App10Lib36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib36 />);
    expect(baseElement).toBeTruthy();
  });
});
