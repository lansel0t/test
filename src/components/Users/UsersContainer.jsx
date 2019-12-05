import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import { setUsersAC } from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        Users: state.allusers.Users

    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (Users) => {
            dispatch(setUsersAC(Users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
