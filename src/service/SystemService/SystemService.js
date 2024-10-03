import { get, post, patch, deleted } from "../index"
import routes from './routes.js';  // Importing the routes

const SystemServices = {
  reCaptchaVerify: async (params) => {
    const data = await post(routes.reCaptchaVerify, params);
    return data;
  },
  uploadDocuments: async (params) => {
    const data = await post(routes.uploadDocuments, params);
    return data;
  },
  deleteUser: async (id) => {
    const data = await deleted(routes.deleteUser, { id });
    return data;
  },
  updateProfile: async (params) => {
    const data = await patch(routes.updateProfile, params);
    return data;
  },

  getData: async (params) => {
    const data = await get(routes.getData, params);
    return data;
  }
};

export default SystemServices;
