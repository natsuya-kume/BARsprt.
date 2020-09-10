import React from 'react'
import Post from './Post'
import firebase from '../../config/firebase'
import { useCollectionData } from "react-firebase-hooks/firestore"
import Loading from './Loading'


const Timeline = (props) => {

    const [values, loading, error] = useCollectionData(
        firebase.firestore().collection("post").orderBy("time", "desc"),
        { idField: "id" }
    );
    if (loading) {
        return <div><Loading /></div>;
    }
    if (error) {
        return <div>{`Error: ${error.message}`}</div>;
    }


    return (
        <div className="timeline">
            {values.map(value => (
                <Post
                    key={value.id}
                    id={value.id}
                    avatar={value.avatar}
                    displayName={value.displayName}
                    accountName={value.accountName}
                    time={value.time}
                    content={value.content}
                />
            ))}
        </div>
    )

}

export default Timeline


