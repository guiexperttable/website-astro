import {default as fse} from "fs-extra";

const target = 'public/scripts/table';
const src = '../ge-table/dist/libs/table';

fse.removeSync(target);
fse.copySync(src, target);
