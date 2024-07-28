import axios from 'axios';

// 创建 Axios 实例
const instance = axios.create({
  baseURL: '/api', // 设置请求的根域名
  timeout: 5000 // 设置请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在这里可以添加请求头，例如添加 token 等
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 在这里可以对响应数据进行统一处理，例如处理错误码
    if (response.status!== 200) {
      // 处理错误情况
      return Promise.reject(new Error('请求失败'));
    }
    return response.data;
  },
  (error) => {
    // 处理网络错误等情况
    return Promise.reject(error);
  }
);

// 封装请求方法
export const getRequest = (url: string, params?: object) => {
  return instance.get(url, { params });
};

export const postRequest = (url: string, data?: object) => {
  return instance.post(url, data);
};

export const putRequest = (url: string, data?: object) => {
  return instance.put(url, data);
};

export const deleteRequest = (url: string) => {
  return instance.delete(url);
};