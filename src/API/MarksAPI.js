import axios from "axios";

export default class MarksServise {
    static async getMarks() {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/marks');

        if (response.status === 200) {
            return(response.data);
        } else {
            return false;
        }
    }
}