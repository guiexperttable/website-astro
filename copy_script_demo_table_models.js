import {default as fse} from "fs-extra";

const target = 'public/scripts/demo-table-models';
const src = '../ge-table/dist/libs/demo-table-models';

fse.removeSync(target);
fse.copySync(src, target);
