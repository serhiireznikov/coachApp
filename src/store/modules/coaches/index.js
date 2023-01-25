import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Serhii',
          lastName: 'Rez',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Serhii and I've worked as a freelance web developer for years.",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Andrew',
          lastName: 'Rez',
          areas: ['frontend', 'career'],
          description:
            'I am Andrew and as a senior developer ',
          hourlyRate: 30
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
