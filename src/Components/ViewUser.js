import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
    return <div>
        <div>
            Name : {props.user.name}
        </div>
        <div>
            Email : {props.user.email}
        </div>
    </div>;
}