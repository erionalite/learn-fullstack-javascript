import axios from 'axios';

export const fetchContest = contestid => {
    return axios.get(`/api/contests/${contestid}`)
                .then(resp => resp.data);
}