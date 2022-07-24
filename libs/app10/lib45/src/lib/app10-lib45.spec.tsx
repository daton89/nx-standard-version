import { render } from '@testing-library/react';

import App10Lib45 from './app10-lib45';

describe('App10Lib45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib45 />);
    expect(baseElement).toBeTruthy();
  });
});
