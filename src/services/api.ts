import axios from "axios";

export const apiUrl = axios.create({
   baseURL: "https://api.homologation.cliqdrive.com.br/",
   headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json;version=v1_web'
   },
   timeout: 5 * 1000,
})


apiUrl.interceptors.request.use(
   async config => {
      const token = localStorage.getItem("token_b2bit"); 
      const convertedToken = token ? JSON.parse(token) : null

      if (convertedToken) {
         config.headers['Authorization'] = `Bearer ${convertedToken}`;
      }
      return config;
   },
   error => {
      return Promise.reject(error);
   }
)