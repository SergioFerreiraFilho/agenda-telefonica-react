import 'bootstrap/dist/css/bootstrap.min.css';

export default function TabelaName() {

    return (
        <table class="table table-striped table-hover mt-1">
        <thead>
            <tr class="bg-primary">
                <th>Id</th>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Cidade</th>
                <th>Ações</th>
            </tr>
        </thead>
    </table>

    )
}