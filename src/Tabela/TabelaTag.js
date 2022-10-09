import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

export default function TabelaTag() {
    const API_URL = 'http://localhost:8000'
    const [repos, setRepos] = useState([]);
    useEffect(() =>  {
        fetch(API_URL + '/contatos').then((data) => data.json()).then((data) => setRepos(data));
    }, []);

    return (
        <div>
        <table className='table table-striped table-hover'>
        <tbody>
        <tr>
                {repos.map(repo=> <td key = {repo.id}>{repo.id}</td>)}
                {repos.map(repo=> <td key = {repo.id}>{repo.nome}</td>)}
                {repos.map(repo=> <td key = {repo.id}>{repo.telefone}</td>)}
                {repos.map(repo=> <td key = {repo.id}>{repo.cidade}</td>)}

            <td>
                <button onclick="buscarParaEditar(${cadaItem.id})" data-bs-toggle="offcanvas" data-bs-target="#form_editar" class ="btn btn-warning btn-sm">Editar</button>
                <button onclick="excluirContato(${cadaItem.id})" class="btn btn-danger btn-sm">Excluir</button>
            </td>
        </tr>
        </tbody>
        </table>
        </div>

    )
}