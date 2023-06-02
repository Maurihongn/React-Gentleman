import { Button } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { IPeople } from '../../../models';
import { removeFavorite } from '../../../redux/states';
import { Appstore } from '../../../redux/store';

export type FavoriteTableProps = {};

const FavoriteTable: React.FC<FavoriteTableProps> = () => {
  const pageSize = 5;
  const dispatch = useDispatch();
  const stateFavorites = useSelector((store: Appstore) => store.favorites);

  const handleCLick = (person: IPeople) => {
    dispatch(removeFavorite(person));
  };

  const columns = [
    {
      field: 'actions',
      headerName: '',
      type: 'actions',
      sortable: false,
      minWidth: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>{<Button onClick={() => handleCLick(params.row)}>-</Button>}</>
      ),
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'levelOfHappiness',
      headerName: 'Level of happiness',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  return (
    <>
      <DataGrid
        rows={stateFavorites}
        columns={columns}
        disableColumnSelector
        disableRowSelectionOnClick
        autoHeight
        initialState={{
          pagination: {
            paginationModel: { pageSize: pageSize, page: 0 },
          },
        }}
        getRowId={(row: any) => row.id}
      />
    </>
  );
};

export default FavoriteTable;
