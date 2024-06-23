document.addEventListener('DOMContentLoaded', () => {
    const gastoForm = document.getElementById('gasto-form');
    const gastosList = document.getElementById('gastos-list');

    gastoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const valor = document.getElementById('valor').value;
        const descripcion = document.getElementById('descripcion').value;
        const fecha = document.getElementById('fecha').value;
        const estado = document.getElementById('estado').value;
        
        const gasto = {
            valor,
            descripcion,
            fecha,
            estado
        };
        
        addGastoToList(gasto);
        gastoForm.reset();
    });

    function addGastoToList(gasto) {
        const li = document.createElement('li');
        li.textContent = `${gasto.fecha} - ${gasto.descripcion} - ${gasto.valor} - ${gasto.estado}`;
        gastosList.appendChild(li);
    }
});