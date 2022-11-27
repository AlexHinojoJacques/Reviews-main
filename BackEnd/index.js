require('dotenv').config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
require('./models/connection')

// Rutas
const comentario_router = require('./routes/comentarioRoutes');
const comentarioFU_router = require('./routes/comentarioFURoutes');
const followUP_router = require('./routes/followRoutes');
const formatoReview_router = require('./routes/formatoReviewRoutes');
const imagen_router = require('./routes/imagenRoutes');
const likeFU_router = require('./routes/likeFURoutes');
const like_router = require('./routes/likeRoutes');
const post_router = require('./routes/postRoutes');
const usuario_router = require('./routes/userRoutes');

app.use(bodyParser.json());

// Uso de rutas
app.use('/api', comentario_router);
app.use('/api', comentarioFU_router);
app.use('/api', followUP_router);
app.use('/api', formatoReview_router);
app.use('/api', imagen_router);
app.use('/api', likeFU_router);
app.use('/api', like_router);
app.use('/api', post_router);
app.use('/api', usuario_router);

app.listen(port, () => {
    console.log("La aplicación está escuchando al puerto " + port);
});