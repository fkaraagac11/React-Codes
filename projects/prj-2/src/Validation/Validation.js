import React from "react";

export default function Validation(props) {
    let contentLength = props.name;
    if (contentLength.length > 5) {
        contentLength = "This is long enough";
    } else {
        contentLength = "That Too Short";
    }
    return <p>{contentLength}</p>;
    // return (
    //     <div>
    //         <h2>
    //             Length of Text:{props.name.length}
    //             {props.name.length > 5 ? (
    //                 <p>Text long enough</p>
    //             ) : (
    //                 <p>Text too short</p>
    //             )}
    //         </h2>
    //     </div>
    // );
}
