import axios from 'axios';

export default class UserServise {
    static async getUserMe(token) {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/auth/users/me', {
            headers: {'Authorization': token}
        });

        if (response.status === 200) {
            return(response.data);
        } else {
            return false;
        }
    }

    static async authUser(data) {
        const response = await axios.post('http://127.0.0.1:8000/auth/token/login/', data);

        if (response.status === 200) {
            localStorage.setItem('token', 'Token ' + response.data.auth_token);
            return true;
        } else {
            return false;
        }
    }

    static async regUser(data) {
        const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/users/', data);
        if (response.status === 201) {
            return true;
        } else {
            return false;
        }
    }
}