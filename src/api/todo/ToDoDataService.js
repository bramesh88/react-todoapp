import axios from 'axios'
class ToDoDataService{

    retrieveAllToDos(userName){
        console.log("Retrieve all todos");
        let user="admin";
        let password="pass"
        let basicAuthHeader='Basic '+ window.btoa(user+":"+password);
        return axios.get(`http://localhost:8080/users/${userName}/todos`) }

    getToDoItem(userName,id){
        console.log("getToDoItem all todos");
        return axios.get(`http://localhost:8080/users/${userName}/todos/${id}`);
    }
    deleteToDoItem(userName,id){
        console.log("delete a todos");
        return axios.delete(`http://localhost:8080/users/${userName}/todos/${id}`);
    }
    updateToDo(userName,id,todo){
        console.log("update todos");
        return axios.put(`http://localhost:8080/users/${userName}/todos/${id}`,todo);
    }
    createToDo(userName,todo){
        console.log("create todos");
        return axios.post(`http://localhost:8080/users/${userName}/todos`,todo);
    }
}

export default new ToDoDataService()