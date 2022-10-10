import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import api from '../api';

export default function TabelaTag() {
    const [repos, setRepos] = useState([]);
    useEffect(() =>  {
        fetch(api.API_URL + '/contatos').then((data) => data.json()).then((data) => setRepos(data));
    }, []);

    return (
        <div>
        <table className='table table-striped table-hover'>
        <tbody>
        {
            repos.map(repo => {
                return(
                <tr key={repo.id}> 
                    <td>{repo.id}</td>
                    <td>{repo.nome}</td>
                    <td>{repo.telefone}</td>
                    <td>{repo.cidade}</td>
                </tr>
                )
            
            })}
          
        
        </tbody>
        </table>
        </div>

    )
}