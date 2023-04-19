import { Axios } from "axios";

export const getProjectList = () => {
    return Axios.get('/api/projects');
}
export const getProject = (id) => {
    return Axios.get(`/api/projects/${id}`);
}
export const createProject = async (data) => {
    return await Axios.post("http://localhost:8000/api/projects", data)
        .then((res) => {
            return res.data;
        });
}
export const updateProject = (id, project) => {
    return Axios.put(`/api/projects/${id}`, project);
}
export const deleteProject = (id) => {
    return Axios.delete(`/api/projects/${id}`);
}
