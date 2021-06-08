import { useEffect, useState } from "react";
import styles from './home.module.scss';
import api from "../services/api";

function Home(){

    const [filmes, setFilmes] = useState([]);
    
    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get('/popular?api_key=e7c136c1f80c1950450eacfc35ac0dc2');
            const data = response.data.results;
            console.log(data);
            
            setFilmes(data);
        }
    
        loadFilmes();
    }, [])
    
    return(
        <div>
            <h1>Filmes Populares</h1>
            <div className={styles.content}>
            {filmes.map(item => {
            return(
                <div className={styles.movie}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <img className={styles.poster} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}></img>
                </div>
                );
            })}
        </div>
      </div>
    );
}

export default Home;