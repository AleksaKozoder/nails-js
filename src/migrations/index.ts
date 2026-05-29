import * as migration_20260529_095804 from './20260529_095804';
import * as migration_20260529_100811 from './20260529_100811';
import * as migration_20260529_100832___name from './20260529_100832___name';

export const migrations = [
  {
    up: migration_20260529_095804.up,
    down: migration_20260529_095804.down,
    name: '20260529_095804',
  },
  {
    up: migration_20260529_100811.up,
    down: migration_20260529_100811.down,
    name: '20260529_100811',
  },
  {
    up: migration_20260529_100832___name.up,
    down: migration_20260529_100832___name.down,
    name: '20260529_100832___name'
  },
];
