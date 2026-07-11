import { AngularBroadcast } from '@code-squire/angular';
import { BroadcastBundle, BroadcastBundleInterface } from '@code-squire/broadcasts';
import { WorkspaceBroadcast } from '@code-squire/workspace';

export interface SquireLoadoutBroadcast extends BroadcastBundleInterface { }

@BroadcastBundle([
  WorkspaceBroadcast,
  AngularBroadcast
])
export class SquireLoadoutBroadcast { }
