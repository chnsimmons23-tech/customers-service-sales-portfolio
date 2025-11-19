import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const router = express.Router();
const spec = YAML.load('openapi.yaml');

router.use('/', swaggerUi.serve, swaggerUi.setup(spec));

export default router;