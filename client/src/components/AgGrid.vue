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
  import { AgGridVue } from "ag-grid-vue"
  import axios from 'axios'

  //import "ag-grid-enterprise";

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
              var dateParts = cellValue.split("/");
              var day = Number(dateParts[2]);
              var month = Number(dateParts[1]) - 1;
              var year = Number(dateParts[0]);
              var cellDate = new Date(day, month, year);
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
      this.gridColumnApi = this.gridOptions.columnApi;
    },

    methods: {
      onGridReady(params) {
        const httpRequest = new XMLHttpRequest();
        const updateData = data => {
          this.rowData = data;
          value = value + 1;
        };

        const data = [
          {"athlete":"Michael Phelps","age":23,"country":"United States","year":2008,"date":"24/08/2008","sport":"Swimming","gold":8,"silver":0,"bronze":0,"total":8},
          {"athlete":"Michael Phelps","age":19,"country":"United States","year":2004,"date":"29/08/2004","sport":"Swimming","gold":6,"silver":0,"bronze":2,"total":8},
          {"athlete":"Michael Phelps","age":27,"country":"United States","year":2012,"date":"12/08/2012","sport":"Swimming","gold":4,"silver":2,"bronze":0,"total":6},
          {"athlete":"Natalie Coughlin","age":25,"country":"United States","year":2008,"date":"24/08/2008","sport":"Swimming","gold":1,"silver":2,"bronze":3,"total":6},
          {"athlete":"Aleksey Nemov","age":24,"country":"Russia","year":2000,"date":"01/10/2000","sport":"Gymnastics","gold":2,"silver":1,"bronze":3,"total":6},
          {"athlete":"Alicia Coutts","age":24,"country":"Australia","year":2012,"date":"12/08/2012","sport":"Swimming","gold":1,"silver":3,"bronze":1,"total":5},
          {"athlete":"Missy Franklin","age":17,"country":"United States","year":2012,"date":"12/08/2012","sport":"Swimming","gold":4,"silver":0,"bronze":1,"total":5},
          {"athlete":"Ryan Lochte","age":27,"country":"United States","year":2012,"date":"12/08/2012","sport":"Swimming","gold":2,"silver":2,"bronze":1,"total":5},
          {"athlete":"Allison Schmitt","age":22,"country":"United States","year":2012,"date":"12/08/2012","sport":"Swimming","gold":3,"silver":1,"bronze":1,"total":5},
          {"athlete":"Natalie Coughlin","age":21,"country":"United States","year":2004,"date":"29/08/2004","sport":"Swimming","gold":2,"silver":2,"bronze":1,"total":5},
          {"athlete":"Ian Thorpe","age":17,"country":"Australia","year":2000,"date":"01/10/2000","sport":"Swimming","gold":3,"silver":2,"bronze":0,"total":5},
          {"athlete":"Dara Torres","age":33,"country":"United States","year":2000,"date":"01/10/2000","sport":"Swimming","gold":2,"silver":0,"bronze":3,"total":5},
          {"athlete":"Cindy Klassen","age":26,"country":"Canada","year":2006,"date":"26/02/2006","sport":"Speed Skating","gold":1,"silver":2,"bronze":2,"total":5},
          {"athlete":"Nastia Liukin","age":18,"country":"United States","year":2008,"date":"24/08/2008","sport":"Gymnastics","gold":1,"silver":3,"bronze":1,"total":5},
          {"athlete":"Marit Bjørgen","age":29,"country":"Norway","year":2010,"date":"28/02/2010","sport":"Cross Country Skiing","gold":3,"silver":1,"bronze":1,"total":5},
          {"athlete":"Sun Yang","age":20,"country":"China","year":2012,"date":"12/08/2012","sport":"Swimming","gold":2,"silver":1,"bronze":1,"total":4},
          {"athlete":"Kirsty Coventry","age":24,"country":"Zimbabwe","year":2008,"date":"24/08/2008","sport":"Swimming","gold":1,"silver":3,"bronze":0,"total":4}];

        updateData(data);

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
