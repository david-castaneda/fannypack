#!/usr/bin/env node

import program from 'commander';
import FannyPack from './lib/main';

class Main {
  private appname!: string;
  private apptype!: string;

  constructor() {
    this.init();
  }

  private init(): void {
    program
      .version('0.0.1')
      .option('--basic-node', 'Basic Node.js project')
      .option('--custom-node', 'Custom Node.js project')
      .parse(process.argv);

    this.appname = program.args[0] || 'fannypack-app';

    this.setup(program);
  }

  private setup(program: any): void {
    this.setProjectType(program);

    const project: FannyPack = new FannyPack(this.appname, this.apptype);
  }

  private setProjectType(program: any): void {
    if (program.basicNode) this.apptype = 'basic-node';
    if (program.customNode) this.apptype = 'custom-node';

    this.apptype == '' && program.help();
  }
}

module.exports = new Main();
