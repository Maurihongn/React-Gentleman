import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPeople } from '../../../../models';
import { addFavorite } from '../../../../redux/states';
import { Appstore } from '../../../../redux/store';

export type PeopleTableProps = {};

const PeopleTable: React.FC<PeopleTableProps> = () => {
  const [selectedPeople, setselectedPeople] = useState<IPeople[]>([]);
  const pageSize = 5;
  const dispatch = useDispatch();
  const statePeople = useSelector((store: Appstore) => store.people);
  const favoritePeople = useSelector((store: Appstore) => store.favorites);

  const findPerson = (person: IPeople) =>
    !!favoritePeople.find((p) => p.id === person.id);
  const filterPerson = (person: IPeople) =>
    favoritePeople.filter((p) => p.id !== person.id);

  const handleChange = (person: IPeople) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople));
    setselectedPeople(filteredPeople);
  };

  const columns = [
    {
      field: 'actions',
      headerName: '',
      type: 'actions',
      sortable: false,
      minWidth: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size='small'
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
          }
        </>
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

  useEffect(() => {
    setselectedPeople(favoritePeople);
  }, [favoritePeople]);

  return (
    <>
      <DataGrid
        rows={statePeople}
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

export default PeopleTable;
