import { render } from '@testing-library/react';

import App10Lib9 from './app10-lib9';

describe('App10Lib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib9 />);
    expect(baseElement).toBeTruthy();
  });
});
