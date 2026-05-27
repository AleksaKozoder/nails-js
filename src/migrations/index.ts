import * as migration_20260527_101750 from './20260527_101750';

export const migrations = [
  {
    up: migration_20260527_101750.up,
    down: migration_20260527_101750.down,
    name: '20260527_101750'
  },
];
