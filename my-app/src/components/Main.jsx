import React, {useState, useEffect} from 'react';
import axios from "axios";



function Main() {
    const [isLoading, setLoading] = useState(true);  //
    const [categories, setCategory] = useState();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/categories/").then(res => {
            setCategory(res.data);
            setLoading(false);
        });
    }, []);

    //
    if (isLoading) {
        return <h1>Загрузка...</h1>;
    }

    //
    return (
        <>
        <h1>Выберите категорию:</h1>
        <div className="button">
            {categories.map((category) => (
                <a key={category.id} className="s" href={`/category/${category.id}`}>{category.name}</a>
            ))}
        </div>
        </>
    );
}


export default Main