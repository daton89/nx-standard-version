import { render } from '@testing-library/react';

import App10Lib17 from './app10-lib17';

describe('App10Lib17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib17 />);
    expect(baseElement).toBeTruthy();
  });
});
