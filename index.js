/***********************************************************************
 *                                                                   _
 *       _____  _                           ____  _                 |_|
 *      |  _  |/ \   ____  ____ __ ___     / ___\/ \   __   _  ____  _
 *      | |_| || |  / __ \/ __ \\ '_  \ _ / /    | |___\ \ | |/ __ \| |
 *      |  _  || |__. ___/. ___/| | | ||_|\ \___ |  _  | |_| |. ___/| |
 *      |_/ \_|\___/\____|\____||_| |_|    \____/|_| |_|_____|\____||_|
 *
 *      ================================================================
 *                 More than a coder, More than a designer
 *      ================================================================
 *
 *
 *      - Document: index.js
 *      - Author: aleen42
 *      - Description: the main entrance for github-search
 *      - Create Time: Jul 22rd, 2021
 *      - Update Time: Jul 22rd, 2021
 *
 *
 **********************************************************************/

const fs = require('fs');
const path = require('path');

module.exports = {
    book: {
        assets: './assets',
        css: ['plugin.css'],
        js: ['plugin.js'],
    },
    hooks: {
        'init': function () {
            const asset = path.resolve(__dirname, './assets/plugin.js');
            fs.writeFileSync(
                asset,
                fs.readFileSync(asset, 'utf8').replace(/__ENV_ACCESS_TOKEN__/, `atob('${Buffer.from(process.env['ACCESS_TOKEN'] || '').toString('base64')}')`)
                , 'utf8');
        },
    },
};
