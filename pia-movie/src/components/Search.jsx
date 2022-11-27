import styles from './Search.module.css';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

//el Search no jala porque usan el useHistory pero en versiones viejas y como tengo la mas actualizada la cambiaron por useNavigate pero no jalaaaaaaa >:(

export function Search(){
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        navigate('/?search=' + searchText);
    };

    return(
        <form className = { styles.searchContainer } onSubmit={handlesubmit}>
            <div className = { styles.searchBox }>
                <input 
                className = { styles.searchInput } 
                type ="text" 
                value={searchText} 
                onChange={(e) => setSearchText(e.target.value)}
                />
                <button className = { styles.searchButton } type ="submit">
                    <FaSearch size={20}/>
                </button>
            </div>
        </form>
    )
}