export default {

    init() {
        return 'b is here';
    },

    loadC() {

        return new Promise(resolve => {

            require.ensure([], require => {

                const c = require('./c');

                resolve(c.default);
            });
        });
    }
}