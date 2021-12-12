/* eslint-disable consistent-return */
const EntityClientGenerator = require('generator-jhipster/generators/entity-client');
const writeFiles = require('./files').writeFiles;

module.exports = class extends EntityClientGenerator {
    constructor(args, opts) {
        super(args, { fromBlueprint: true, ...opts }); // fromBlueprint variable is important

        const jhContext = (this.jhipsterContext = this.options.jhipsterContext || opts.jhipsterContext);

        if (!jhContext) {
            this.error(`This is a JHipster blueprint and should be used only like ${chalk.yellow('jhipster --blueprint search-filter')}`);
        }

        this.configOptions = jhContext.configOptions || {};
    }


    get writing() {
        const phaseFromJHipster = super._writing();
        const myCustomPhase = writeFiles()
        return Object.assign(phaseFromJHipster, myCustomPhase);
    }

    get end() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._end();
    }
};
