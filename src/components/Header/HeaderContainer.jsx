import React from 'react';
import Header from './Header';
import Axios from 'axios';
import {setAuthUserData, logout} from '../../redux/auth-reducer';
import { connect } from "react-redux";
import { authAPI } from '../../redux/api';




class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
    
});

export default connect(mapStateToProps, { setAuthUserData, logout })(HeaderContainer);