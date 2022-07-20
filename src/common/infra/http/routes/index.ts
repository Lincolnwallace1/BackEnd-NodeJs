import { Router } from 'express';

import UserRoutes from '../../../../modules/user/infra/http/routes/UserRoutes';

const routes = Router()

routes.use('/users', UserRoutes)

export default routes;