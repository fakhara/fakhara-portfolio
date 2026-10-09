
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5135/api",
});

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl: string;
}

export async function getProjects(): Promise<Project[]> {
  const response = await api.get<Project[]>("/projects");
  return response.data;
}