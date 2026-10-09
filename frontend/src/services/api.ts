
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5135/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface HealthResponse {
  status: string;
  message: string;
  timestamp: string;
}

export async function getApiHealth(): Promise<HealthResponse> {
  const response = await api.get<HealthResponse>("/health");
  return response.data;
}

export default api;