import axios from "axios";

const API_URL = "http:///amb-qa-env.eba-prycu9wy.eu-north-1.elasticbeanstalk.com";

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = API_URL;

const API = {
  getAllStates: async () => {
    try {
      const resp = await axios.get(`/state/names`);
      return await resp.data.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
  getKpiMonthlyData: async ({ stateCountry, year, month }) => {
    try {
      const resp = await axios.post("/report/kpiMonthly", {
        stateCountry,
        year,
        month,
      });
      return resp.data.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
  getKpiQuarterlyData: async ({ stateCountry, year, quarter }) => {
    try {
      const resp = await axios.post("/report/kpiQuarterly", {
        stateCountry,
        year,
        quarter,
      });
      return resp.data.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
};

export default API;
