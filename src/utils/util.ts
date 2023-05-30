export const resFormatSuccess = (opt = {}) => {
  return {
    msg: opt["msg"] || "ok",
    code: opt["code"] || "200",
    data: opt["data"] || null,
  };
};
