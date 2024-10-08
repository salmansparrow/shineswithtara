import instance from "./Config/index.js";
import { ErrorHandler } from "./ErrorHandler/ErrorHandler.js";

export const get = async (endPoint, params) => {
  try {
    const result = await instance.get(endPoint, { params: params });
    if (result.status === 200 || result.status === 206 || result.status === 202 )
      return result.data;
    else throw result;
  } catch (e) {
    throw ErrorHandler(e);
  }
};

export const post = async (endPoint, data) => {
  try {
    const result = await instance.post(endPoint, data);
    if (
      result.status === 200 ||
      result.status === 206 ||
      result.status === 202 ||
      result.status === 201
    ) {
      return result.data; // Return response data if successful
    } else {
      // If the response status is not successful, throw the result for error handling
      throw result;
    }
  } catch (e) {
    // Instead of just throwing ErrorHandler(e), log the error and include more detail

    throw ErrorHandler(e); // Throw the error for further handling
  }
};
export const patch = async (endPoint, data) => {
  try {
    const result = await instance.patch(endPoint, data);
    if (result.status === 200 || result.status === 206) return result.data;
    else throw result;
  } catch (e) {
    throw ErrorHandler(e);
  }
};

export const deleted = async (endPoint, params) => {
  try {
    const result = await instance.delete(endPoint, { params: params });
    if (result.status === 200 || result.status === 206) return result.data;
    else throw result;
  } catch (e) {
    throw ErrorHandler(e);
  }
};
