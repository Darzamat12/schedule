import axios from 'axios';

const instance = axios.create({
  baseURL: `https://rs-react-schedule.firebaseapp.com/api/`,
});

const teamId = '46';

export const organizersAPI = {
  async getOrganizers() {
    const response = await instance.get(`team/${teamId}/organizers`);
    return response.data;
  },
  async createOrganizer(person: any) {
    const response = await instance.post(`team/${teamId}/organizer`, person);
    return response.data;
  },
  async getOrganizer(id: string) {
    const response = await instance.get(`team/${teamId}/organizer/${id}`);
    return response.data;
  },
  async updateOrganizer(id: string, person: any) {
    const response = await instance.put(`team/${teamId}/organizer/${id}`, person);
    return response.data;
  },
  async deleteOrganizer(id: string) {
    const response = await instance.delete(`team/${teamId}/organizer/${id}`);
    return response.data;
  },
};
