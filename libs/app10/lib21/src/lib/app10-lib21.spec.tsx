import { render } from '@testing-library/react';

import App10Lib21 from './app10-lib21';

describe('App10Lib21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib21 />);
    expect(baseElement).toBeTruthy();
  });
});
