import axios from 'axios';

const instance = axios.create({
  baseURL: `https://rs-react-schedule.firebaseapp.com/api/`,
});

const teamId = '46';

export const organizersAPI = {
  getOrganizers() {
    return instance
      .get(`team/${teamId}/organizers`)
      .then((response) => response.data);
  },
  createOrganizer(person: any) {
    return instance
      .post(`team/${teamId}/organizer`, person)
      .then((response) => response.data);
  },
  getOrganizer(id: string) {
    return instance
      .get(`team/${teamId}/organizer/${id}`)
      .then((response) => response.data);
  },
  updateOrganizer(id: string, person: any) {
    return instance
      .put(`team/${teamId}/organizer/${id}`, person)
      .then((response) => response.data);
  },
  deleteOrganizer(id: string) {
    return instance
      .delete(`team/${teamId}/organizer/${id}`)
      .then((response) => response.data);
  },
};

