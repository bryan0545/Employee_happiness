import { Person } from "@/models";
import { removeFavorite } from "@/redux/state";
import { AppStore } from "@/redux/store";
import { Button, Checkbox } from "@mui/material";
import { GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface FavoriteTableInterface {}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
  const [seletedPeople, setSeletedPeople] = useState<Person[]>([]);
  const dispatch = useDispatch();
  const stateFavorites = useSelector((store: AppStore) => store.favorites);
  const pageSize = 5;

  const findPerson = (person: Person) => {
    return !!seletedPeople.find((p) => p.id === person.id);
  };

  const filterPerson = (person: Person) => {
    return seletedPeople.filter((p) => p.id !== person.id);
  };

  const onCLick = (person: Person) => {
    dispatch(removeFavorite(person));
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Level of happiness",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "actions",
      type: "actions",
      sortable: false,
      headerName: "",
      width: 100,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <Button variant="outlined" onClick={() => onCLick(params.row)}>
            DELETE
          </Button>
        </>
      ),
    },
  ];

  return (
    <DataGrid
      rows={stateFavorites}
      columns={columns}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row: any) => row.id}
    />
  );
};

export default FavoriteTable;
