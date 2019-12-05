const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        { id: 1, photoUrl: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg', nickname: 'Admin', password: '12345678' },
        { id: 2, photoUrl: 'https://image.businessinsider.com/5d9ba6645288793e827eebbd?width=1100&format=jpeg&auto=webp', nickname: 'dmjs', password: 'admin' },
    ],
    newPostText: 'testovoe'
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export const setUsersAC = (Users) => ({ type: SET_USERS, Users })
export default usersReducer; 