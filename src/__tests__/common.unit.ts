import {kvsTestAll} from 'kvs-testlab';
import {Store} from 'kvs';
import File from '../index';

describe('kvs-simple/common', function () {
  kvsTestAll(() => Store.create(File));
});
