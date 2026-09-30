import React from "react";

const Childcomponents = React.memo((props) => {
    console.log("child components got re-render again");

    return (
        <div>
            <button>
                {props.buttonName}
            </button>
        </div>
    )
})

export default Childcomponents;