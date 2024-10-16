import React, {useState, useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


function Recipe() {

    const id = useParams().id;
    const [isLoading, setLoading] = useState(true);
    const [pecepti, setPecepti] = useState();


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/pecepti/${id}`).then(res => {
            setRecipes(res.data);
            setLoading(false);
        });
    }, [id]);


    if (isLoading) {
        return <h1>Загрузка...</h1>;
    }
    return (
        <>
            <h1>{pecepti.title}:</h1>
            <div className='pecept'>
                <text style={{ whiteSpace: "pre-line" }}>{pecepti.description}{pecepti.category}</text>
            </div>
        </>
    );
};

export default Pecept;