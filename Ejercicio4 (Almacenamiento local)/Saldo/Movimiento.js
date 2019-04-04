export default class Movimientos{
constructor(tableMovimiento, tableInfo){
    this._tableMovimiento = tableMovimiento;
    this._tableInfo = tableInfo;

    
    this._numDeposito = 0;
    this._totalDeposito = 0;
    this._numRetiro = 0;
    this._totalRetiro = 0;
    this._numMovimientos = 0;
    
}

addMove(cliente){
    let row = this._tableMovimiento.insertRow(-1);
    let cellnCuenta = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellOpcion = row.insertCell(2);
    let cellCantidad = row.insertCell(3);
    let cellBalance = row.insertCell(5);

    cellnCuenta.innerHTML = cliente.nCuenta;
    cellName.innerHTML = cliente.name;
    cellOpcion.innerHTML = cliente.opcion;
    cellCantidad.innerHTML = cliente.cantidad;
    cellBalance.innerHTML = cliente.balance;

    if(cliente.opcion === "1"){
    cellBalance.innerHTML = cliente.getDeposito();
    this._numDeposito++;
    this._tableInfo.rows[1].cells[1].innerHTML = this._numDeposito;
    this._totalDeposito = cliente.getDeposito();
    this._tableInfo.rows[2].cells[1].innerHTML = this._totalDeposito;
    }
    if(cliente.opcion === "2"){
        cellBalance.innerHTML = cliente.getRetiro();
        this._numRetiro++;
        this._tableInfo.rows[3].cells[1].innerHTML = this._numRetiro;
        this._totalRetiro = cliente.getRetiro();
        this._tableInfo.rows[4].cells[1].innerHTML = this._totalRetiro;

    }
    
    this._numMovimientos++;        
    this._tableInfo.rows[5].cells[1].innerHTML = this._numMovimientos;
    this._tableInfo.rows[6].cells[1].innerHTML = cliente.getMoney();

}
}