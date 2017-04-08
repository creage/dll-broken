import b from './b';

export default {
    init() {

        console.log(b.init());

        require.ensure([], require => {

            const c = require('./c');

            console.log(c.init());
        });
    }
}