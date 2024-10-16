import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


function Category() {

    const category = useParams().category;
    const [isLoading, setLoading] = useState(true);
    const [pecepti, setRecipes] = useState();


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/pecepti/?category=${category}`).then(res => {
            setRecipes(res.data);
            setLoading(false);
        });
    }, [category]);


    if (isLoading) {
        return <h1>Загрузка...</h1>;
    }

    return (
        <div>
            <h1>{category}:</h1>
            <div className='pecept'>
                {pecepti.map((title) => (
                <p key={title.id}><a className="r" href={`/pecepti/${title.id}`}>{title.title}</a></p>
                ))}
            </div>
        </div>
    );
};

export default Category;