module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'sequlize_test',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acqurie: 30000,
        idle: 10000
    }
}