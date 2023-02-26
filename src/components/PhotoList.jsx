import React from "react";
import PhotoItem from "./PhotoItem";

const PhotoList = ({photos}) => {
    return (
        <div>
            <h1>
                Photos
            </h1>
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>size</th>
                </tr>
                {photos.map((photo) =>
                    <PhotoItem photo={photo} key={photo.id}/>
                )}
            </table>

        </div>
    )
}

export default PhotoList;