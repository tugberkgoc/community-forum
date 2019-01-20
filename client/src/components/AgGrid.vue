<template>
  <div>

    <div style="height: 100%">
      <div style="height: 100%; box-sizing: border-box;">
        <ag-grid-vue style="width: 100%; height: 100%;" class="ag-theme-balham" id="myGrid"
                     :gridOptions="gridOptions"
                     @grid-ready="onGridReady"
                     :columnDefs="columnDefs"
                     :defaultColDef="defaultColDef"
                     :defaultColGroupDef="defaultColGroupDef"
                     :columnTypes="columnTypes"
                     :rowData="rowData"
                     :floatingFilter="true"></ag-grid-vue>
      </div>
    </div>

  </div>
</template>

<script>
  import { AgGridVue } from "ag-grid-vue";
  import axios from 'axios';

  export default {
    name: 'AgGrid',

    components: {
      "ag-grid-vue": AgGridVue
    },

    data() {
      return {
        gridOptions: null,
        gridApi: null,
        columnApi: null,
        columnDefs: null,
        defaultColDef: null,
        defaultColGroupDef: null,
        columnTypes: null,
        rowData: null
      };
    },

    beforeMount() {
      this.gridOptions = {};
      this.columnDefs = [
        {
          headerName: "Athlete",
          field: "athlete"
        },
        {
          headerName: "Sport",
          field: "sport"
        },
        {
          headerName: "Age",
          field: "age",
          type: "numberColumn"
        },
        {
          headerName: "Year",
          field: "year",
          type: "numberColumn"
        },
        {
          headerName: "Date",
          field: "date",
          type: ["dateColumn", "nonEditableColumn"],
          width: 200
        },
        {
          headerName: "Medals",
          groupId: "medalsGroup",
          children: [
            {
              headerName: "Gold",
              field: "gold",
              type: "medalColumn"
            },
            {
              headerName: "Silver",
              field: "silver",
              type: "medalColumn"
            },
            {
              headerName: "Bronze",
              field: "bronze",
              type: "medalColumn"
            }
          ]
        }
      ];
      this.defaultColDef = {
        width: 220,
        editable: true,
        filter: "agTextColumnFilter"
      };
      this.defaultColGroupDef = {marryChildren: true};
      this.columnTypes = {
        numberColumn: {
          width: 83,
          filter: "agNumberColumnFilter"
        },
        medalColumn: {
          width: 100,
          columnGroupShow: "open",
          filter: false
        },
        nonEditableColumn: {editable: false},
        dateColumn: {
          filter: "agDateColumnFilter",
          filterParams: {
            comparator: (filterLocalDateAtMidnight, cellValue) => {
              const dateParts = cellValue.split("/");
              const day = Number(dateParts[2]);
              const month = Number(dateParts[1]) - 1;
              const year = Number(dateParts[0]);
              const cellDate = new Date(day, month, year);
              if (cellDate < filterLocalDateAtMidnight) {
                return -1;
              } else if (cellDate > filterLocalDateAtMidnight) {
                return 1;
              } else {
                return 0;
              }
            }
          }
        }
      };
    },

    mounted() {
      this.gridApi = this.gridOptions.api;
      // this.gridColumnApi = this.gridOptions.columnApi;
    },

    methods: {
      onGridReady() {
        // const httpRequest = new XMLHttpRequest();
        this.rowData = this.$store.state.registration.agGridData;

        // axios.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json')
        //   .then((res) => {
        //     updateData(JSON.parse(res.responseText))
        //   })


        // httpRequest.open(
        //   "GET",
        //   "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
        // );
        // httpRequest.send();
        // httpRequest.onreadystatechange = () => {
        //   if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        //     console.log(JSON.parse(httpRequest.responseText))
        //     updateData(JSON.parse(httpRequest.responseText));
        //   }
        // };
      }
    }

  };

</script>

<style lang="scss">
  @import "~ag-grid-community/dist/styles/ag-grid.css";
  @import "~ag-grid-community/dist/styles/ag-theme-balham.css";
</style>
