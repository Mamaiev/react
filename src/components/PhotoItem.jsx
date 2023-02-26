import React from "react";

const PhotoItem = ({photo}) => {
    return (
        <tr>
            <td> {photo.id} </td>
            <td> {photo.name}</td>
            <td> {photo.size}</td>
        </tr>
    )
}
export default PhotoItem;