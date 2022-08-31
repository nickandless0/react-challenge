import React, { useState } from "react";

const LogoItem = ({
    id,
    logo,
    name
}) => {
    const [validImage, setValidImage] = useState(true);
    const addDefaultSrc = () => {
        setValidImage(false);
    }
    return (
        <div key={id} className="list-item">
            <div className="overlay">{id}</div>
            {validImage ? <img onError={addDefaultSrc} src={logo} alt={name} /> : name}
        </div>
    )
}
export default LogoItem;