import axios from 'axios';

const instance = axios.create({
  baseURL: `https://rs-react-schedule.firebaseapp.com/api/`,
});

const teamId = '46';

export const eventsAPI = {
  async getEvents() {
    const response = await instance.get(`team/${teamId}/events`);
    return response.data;
  },
  async createEvent(event: any) {
    const response = await instance.post(`team/${teamId}/event`, event);
    return response;
  },
  async getEvent(id: string) {
    const response = await instance.get(`team/${teamId}/event/${id}`);
    return response;
  },
  async updateEvent(id: string, event: any) {
    const response = await instance.put(`team/${teamId}/event/${id}`, event);
    return response;
  },
  async deleteEvent(id: string) {
    const response = await instance.delete(`team/${teamId}/event/${id}`);
    return response;
  },
};
