import { Prefix } from '@_linked/core/utils/Prefix';
import { createNameSpace } from '@_linked/core/utils/NameSpace';
import { linkedOntology } from '../package.js';
import * as _this from './lincd-ui.js';

const dataFile = '../data/lincd-ui.json';
const base = 'http://lincd.org/ont/lincd-ui/';

Prefix.add('lincd-ui', base);

export const loadData = () => {
  if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
    return import(dataFile);
  }
  //@ts-ignore
  return import(dataFile, { with: { type: 'json' } }).then(
    (data) => data.default
  );
};

export const ns = createNameSpace(base);
export const _self = ns('');

export const lincdUi = {
  _self,
};

linkedOntology(_this, ns, 'lincd-ui', loadData, dataFile);
