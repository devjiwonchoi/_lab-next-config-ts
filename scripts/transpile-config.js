"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "transpileConfig", {
    enumerable: true,
    get: function() {
        return transpileConfig;
    }
});
const _promises = require("fs/promises");
const _swc = require("./swc");
const _path = require("path");
async function transpileConfig({ configPath, configFileName, cwd, log }) {
    const isCJS = configFileName.endsWith('.cts');
    try {
        const config = await (0, _promises.readFile)(configPath, 'utf-8');
        const { code } = await (0, _swc.transform)(config, {
            jsc: {
                target: 'esnext',
                parser: {
                    syntax: 'typescript'
                }
            },
            isModule: 'unknown'
        });
        const tempConfigPath = (0, _path.join)(cwd, `next.compiled.config.${isCJS ? 'cjs' : 'mjs'}`);
        await (0, _promises.writeFile)(tempConfigPath, code, 'utf-8');
        return tempConfigPath;
    } catch (error) {
        log.error(`Failed to compile ${configFileName}`);
        throw error;
    }
}
