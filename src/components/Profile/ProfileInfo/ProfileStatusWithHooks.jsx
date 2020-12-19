import React, {useEffect, useState} from 'react';
import styles from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const UnActiveEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const OnStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            <div className={styles.inblock}>
                Status: &nbsp;
            </div>
            {!editMode ?
                <div className={styles.inblock}>
                    <span className={styles.status} title='Click to change' onClick={activateEditMode}>
                        {props.status ? props.status : "No Status"}
                    </span>
                </div>
                :
                <div className={styles.inblock}>

                    <input onChange={OnStatusChange}
                           onBlur={UnActiveEditMode}
                           autoFocus={true}
                           value={status}/>
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;
