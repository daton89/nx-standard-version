import { render } from '@testing-library/react';

import App10Lib19 from './app10-lib19';

describe('App10Lib19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib19 />);
    expect(baseElement).toBeTruthy();
  });
});
