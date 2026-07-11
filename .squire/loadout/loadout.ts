import { SquireLoadout } from '@code-squire/workspace';
import { SquireLoadoutBroadcast } from './loadout.broadcast';

export function squireLoadout(): SquireLoadout {
  return {
    broadcasts: [ SquireLoadoutBroadcast ]
  }
}
