import { post, get ,patch,deleted} from 'services';
import routes from './routes';

const SystemServices = {
  reCaptchaVerify: async (obj) => {
    const data = await post(routes.reCaptchaVerify, obj);
    return data;
  },
  uploadDocuments: async (obj) => {
    const data = await post(routes.uploadDocuments, obj);
    return data;
  },
  
}

export default SystemServices