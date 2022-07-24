import { render } from '@testing-library/react';

import App10Lib1 from './app10-lib1';

describe('App10Lib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib1 />);
    expect(baseElement).toBeTruthy();
  });
});
