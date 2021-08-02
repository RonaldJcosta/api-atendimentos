const customExpress = require('./config/costumeExpress');

const app = customExpress();
const _PORT = 3000;

app.listen(_PORT, () => {
	console.log(`App running on port ${_PORT}`);
});
