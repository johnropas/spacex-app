import * as React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import View from '../components/View';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchLaunches } from '../actions/Launch';
import { getLaunches } from '../selectors/Launch';
import formatDate from 'date-fns/format';
import { Box, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const dispatch = useDispatch();
  const launches = useSelector(getLaunches);
  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  const [details, setDetails] = useState('');
  const [toggle, setToggle] = useState(false);

  const dateCellRenderer = (params: any) => {
    return formatDate(new Date(params.value), 'EEE MMM yyyy');
  };

  const btnCellRenderer = (params: any) => {
    return <button onClick={() => {
      setToggle(true);
      setDetails(params.value);
    }}>View Rocket Details</button>;
  };

  return <View>
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
                frameworkComponents={{
                  btnCellRenderer,
                  dateCellRenderer,
                }}
                rowData={launches}>
                <AgGridColumn field="mission_name" headerName="Launch Name" sortable filter />
                <AgGridColumn field="launch_date_utc" headerName="Launch Date" sortable cellRenderer="dateCellRenderer" />
                {/*@ts-ignore*/}
                <AgGridColumn field="details" headerName="" cellRenderer="btnCellRenderer" />
            </AgGridReact>
            <Modal
                open={toggle}
                onClose={() => setToggle(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/*@ts-ignore*/}
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Launch Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {details || 'No details available'}
                    </Typography>
                </Box>
            </Modal>
        </div>
    </View>;
};

export default Home;
