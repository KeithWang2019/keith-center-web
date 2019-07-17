import React from 'react';

function Master(props) {
    return (
        <div>
            <div>
                header
            </div>
            <div>
                {props.children}
            </div>
            <div>
                footer
            </div>
        </div>
    );
}

export default Master;