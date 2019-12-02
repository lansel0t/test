import React from 'react';
import './Profile.css';

const Profile = (props) => {
    return (
        <div className = "Profile">
            <dvi className="Text"><h1>Мой профиль</h1></dvi>
            <div className="Avatar"><img src="https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg"></img></div>
            <div className="infabutme">Информация обо мне</div>
            
        </div>
    )
}

export default Profile;