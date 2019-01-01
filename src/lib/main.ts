import * as fs from 'fs';
import * as path from 'path';
import { spawn } from 'child_process';
import { ncp } from 'ncp';

function getNodeModulesDirectory(type: string): string {
  let user: string =
    process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE || '';

  const localUserDirecory: string = `${user}/.npm-global/lib/node_modules/fannypack/examples/${type}`;

  let exampleDirecory: string;

  if (fs.existsSync(localUserDirecory)) {
    exampleDirecory = localUserDirecory;
    return exampleDirecory;
  } else if (fs.existsSync(`/usr/local/lib/node/fannypack/examples/${type}`)) {
    exampleDirecory = `/usr/local/lib/node/fannypack/examples/${type}`;
    return exampleDirecory;
  } else if (
    fs.existsSync(`/usr/local/lib/node_modules/fannypack/examples/${type}`)
  ) {
    exampleDirecory = `/usr/local/lib/node_modules/fannypack/examples/${type}`;
    return exampleDirecory;
  } else {
    throw 'Unable to find the fanny-pack module';
  }
}

export default class FannyPack {
  private name: string;
  private type: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;

    this.setup();
  }

  public setup(): void {
    const sourcedir: string = getNodeModulesDirectory(this.type);
    const outputdir: string = path.resolve(`./${this.name}`);

    fs.mkdirSync(path.resolve(this.name));

    ncp(sourcedir, outputdir, err => {
      if (err) throw err;

      process.chdir(`./${this.name}`);

      const child = spawn('yarn');

      child.stdout.on('data', data => console.log(`${data}`));
      child.stderr.on('data', data => console.error(`${data}`));
      child.on('exit', (code, signal) => console.log(`Happy Hacking! 🚀`));
    });
  }
}
