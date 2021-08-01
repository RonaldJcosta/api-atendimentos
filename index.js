const express = require('express');
const app = express();

const _PORT = 3000;
app.listen(_PORT, () => {
	console.log(`App running on port ${_PORT}`);
});
