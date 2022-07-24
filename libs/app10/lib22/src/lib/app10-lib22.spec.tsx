import { render } from '@testing-library/react';

import App10Lib22 from './app10-lib22';

describe('App10Lib22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib22 />);
    expect(baseElement).toBeTruthy();
  });
});
