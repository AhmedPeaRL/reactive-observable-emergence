import { react } from './reactive-core/index.js';
import { observe } from './observable-surface/observe.js';
import { witness } from './emergent-witness/witness.js';

export function engage(input) {
  const reaction = react(input);
  const observation = observe(reaction);
  const record = witness(observation);

  return record;
}
