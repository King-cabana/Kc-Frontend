import axios from "axios";
// import { selector } from 'recoil';


// export const userQuery = selector({
//     key: 'userQuery',
//     get: async () => {
//         // const articles = await ArticleService.getAll();
//         const res = await axios.get("http://localhost:8080/eventuser/all")
//         const users = await res.data

//         return users;
//     }
// });

// export const myUserId = selector({
//     key: 'userId',
//     get: async (id) => {
      
//         const res = await axios.get("http://localhost:8080/eventuser"+"/"+id)
//         const users = await res.data

//         return users;
//     }
// });

export const userDetails = (id) => async() =>{
    try{
        const {data} = await axios.get(`http://localhost:8080/eventuser/${id}`)
        console.log(data)
    }catch(error){
        // error.message
        console.log(error)
    }
}

// export const signin = selector({
//     key: 'userSignin',
//     get: async () =>{
//         const res = await axios.post("http://localhost:8080/login")
//     }
// })

