import * as migration_20260824_111958_initial from './20260824_111958_initial';

export const migrations = [
  {
    up: migration_20260824_111958_initial.up,
    down: migration_20260824_111958_initial.down,
    name: '20260824_111958_initial'
  },
];
