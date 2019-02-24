import { GridsModule } from './grids.module';

describe('GridsModule', () => {
  let gridsModule: GridsModule;

  beforeEach(() => {
    gridsModule = new GridsModule();
  });

  it('should create an instance', () => {
    expect(gridsModule).toBeTruthy();
  });
});
