import React, { useState } from "react";

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

        return (
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{status}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
                    </div>
                }
            </div>
        )
}

export default ProfileStatusHooks;