import axios from 'axios';

const instance = axios.create({
  baseURL: `https://rs-react-schedule.firebaseapp.com/api/`,
});

const teamId = '46';

export const eventsAPI = {
  getEvents() {
    return instance
      .get(`team/${teamId}/events`)
      .then((response) => response.data);
  },
  createEvent(event: any) {
    return instance
      .post(`team/${teamId}/event`, event)
      .then((response) => response);
  },
  getEvent(id: string) {
    return instance
      .get(`team/${teamId}/event/${id}`)
      .then((response) => response);
  },
  updateEvent(id: string, event: any) {
    return instance
      .put(`team/${teamId}/event/${id}`, event)
      .then((response) => response);
  },
  deleteEvent(id: string) {
    return instance
      .delete(`team/${teamId}/event/${id}`)
      .then((response) => response);
  },
};
