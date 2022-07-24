import { render } from '@testing-library/react';

import App10Lib37 from './app10-lib37';

describe('App10Lib37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib37 />);
    expect(baseElement).toBeTruthy();
  });
});
