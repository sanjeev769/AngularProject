import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-angular-grid-example',
  templateUrl: './angular-grid-example.component.html',
  styleUrls: ['./angular-grid-example.component.css']
})
export class AngularGridExampleComponent {
  columnDefs: ColDef[] = [
    { field: 'id', headerName:"ID", sortable: true, filter: true, editable: false },
    { field: 'name', headerName:"NAME", sortable: true, filter: true, editable: true },
    { field: 'age', headerName:"AGE", sortable: true, filter: true, editable: true }
  ];
  rowData = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'Diana', age: 28 },
    { id: 5, name: 'Evan', age: 22 },
    { id: 6, name: 'Alice', age: 30 },
    { id: 7, name: 'Bob', age: 25 },
    { id: 8, name: 'Charlie', age: 35 },
    { id: 9, name: 'Diana', age: 28 },
    { id: 10, name: 'Evan', age: 22 }
  ];
  defaultColDef = {
    resizable: true,
    flex:1,
    minWidth:100
  };
  onCellValueChanged(event: any) {
    console.log('Edited Cell:', event.colDef.field);
    console.log('New Value:', event.newValue);
    console.log('Row Data:', event.data);
  }

}
