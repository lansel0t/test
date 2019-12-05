import React from 'react';
import styles from './Users.css';

let Users = (props) => {

    if (props.users.length === 0) {

    /*axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers()
    });*/

   
}
    return <div>
        {
            props.Users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.nickname}
                    </div>
                </span>

            </div>)
        }
    </div>
}

export default Users;
