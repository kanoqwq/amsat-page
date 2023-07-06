import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'call_sign', headerName: 'Call Sigin', width: 130 },
    { field: 'submitter_call_sign', headerName: 'Submitter Call Sign', width: 150 },
    { field: 'heard_date', headerName: 'Date', width: 130 },
    { field: 'heard_time', headerName: 'Time', width: 130 },
    { field: 'location', headerName: 'Location', width: 200 },
    { field: 'satellite_id', headerName: 'Satellite ID', width: 130 },
    {
        field: 'submission_time',
        headerName: 'Submission Time', width: 170
    },
];

const rows = [
    {
        "id": "27",
        "call_sign": "AA4SS",
        "submitter_call_sign": "Submitter12",
        "heard_date": "2023-07-16",
        "heard_time": "18:00:00",
        "location": "Latitude12, Longitude12",
        "satellite_id": "12",
        "submission_time": "2023-07-06 07:41:47"
    },
    {
        "id": "26",
        "call_sign": "AA4QE",
        "submitter_call_sign": "Submitter11",
        "heard_date": "2023-07-15",
        "heard_time": "17:45:00",
        "location": "Latitude11, Longitude11",
        "satellite_id": "11",
        "submission_time": "2023-07-06 07:41:47"
    },
    {
        "id": "25",
        "call_sign": "AA2HJ",
        "submitter_call_sign": "Submitter10",
        "heard_date": "2023-07-14",
        "heard_time": "17:30:00",
        "location": "Latitude10, Longitude10",
        "satellite_id": "10",
        "submission_time": "2023-07-06 07:41:47"
    },
    {
        "id": "24",
        "call_sign": "AA1XP",
        "submitter_call_sign": "Submitter9",
        "heard_date": "2023-07-13",
        "heard_time": "17:15:00",
        "location": "Latitude9, Longitude9",
        "satellite_id": "9",
        "submission_time": "2023-07-06 07:41:47"
    },
    {
        "id": "23",
        "call_sign": "9Z4DZ",
        "submitter_call_sign": "Submitter8",
        "heard_date": "2023-07-12",
        "heard_time": "17:00:00",
        "location": "Latitude8, Longitude8",
        "satellite_id": "8",
        "submission_time": "2023-07-06 07:41:47"
    },
    {
        "id": "22",
        "call_sign": "9M2RPN",
        "submitter_call_sign": "Submitter7",
        "heard_date": "2023-07-11",
        "heard_time": "16:45:00",
        "location": "Latitude7, Longitude7",
        "satellite_id": "7",
        "submission_time": "2023-07-06 07:41:47"
    },
    {
        "id": "21",
        "call_sign": "8J1HAM",
        "submitter_call_sign": "Submitter6",
        "heard_date": "2023-07-10",
        "heard_time": "16:30:00",
        "location": "Latitude6, Longitude6",
        "satellite_id": "6",
        "submission_time": "2023-07-06 07:41:47"
    },
    {
        "id": "15",
        "call_sign": "BI3AR",
        "submitter_call_sign": "Submitter5",
        "heard_date": "2023-07-09",
        "heard_time": "16:15:00",
        "location": "Latitude5, Longitude5",
        "satellite_id": "5",
        "submission_time": "2023-07-06 07:40:46"
    },
    {
        "id": "20",
        "call_sign": "7K4GUR",
        "submitter_call_sign": "Submitter5",
        "heard_date": "2023-07-09",
        "heard_time": "16:15:00",
        "location": "Latitude5, Longitude5",
        "satellite_id": "5",
        "submission_time": "2023-07-06 07:41:47"
    },
    {
        "id": "14",
        "call_sign": "BI3AR",
        "submitter_call_sign": "Submitter4",
        "heard_date": "2023-07-08",
        "heard_time": "16:00:00",
        "location": "Latitude4, Longitude4",
        "satellite_id": "4",
        "submission_time": "2023-07-06 07:40:46"
    },
    {
        "id": "19",
        "call_sign": "4U1ITU",
        "submitter_call_sign": "Submitter4",
        "heard_date": "2023-07-08",
        "heard_time": "16:00:00",
        "location": "Latitude4, Longitude4",
        "satellite_id": "4",
        "submission_time": "2023-07-06 07:41:47"
    },
    {
        "id": "13",
        "call_sign": "BI3AR",
        "submitter_call_sign": "Submitter3",
        "heard_date": "2023-07-07",
        "heard_time": "15:45:00",
        "location": "Latitude3, Longitude3",
        "satellite_id": "3",
        "submission_time": "2023-07-06 07:40:46"
    },
    {
        "id": "18",
        "call_sign": "4O4A",
        "submitter_call_sign": "Submitter3",
        "heard_date": "2023-07-07",
        "heard_time": "15:45:00",
        "location": "Latitude3, Longitude3",
        "satellite_id": "3",
        "submission_time": "2023-07-06 07:41:47"
    },
    {
        "id": "5",
        "call_sign": "BI4KZZ",
        "submitter_call_sign": "Submitter5",
        "heard_date": "2023-07-06",
        "heard_time": "16:15:00",
        "location": "Latitude5, Longitude5",
        "satellite_id": "5",
        "submission_time": "2023-07-06 07:37:32"
    },
    {
        "id": "4",
        "call_sign": "BI4KZZ",
        "submitter_call_sign": "Submitter4",
        "heard_date": "2023-07-06",
        "heard_time": "16:00:00",
        "location": "Latitude4, Longitude4",
        "satellite_id": "4",
        "submission_time": "2023-07-06 07:37:32"
    },
    {
        "id": "3",
        "call_sign": "BI4KZZ",
        "submitter_call_sign": "Submitter3",
        "heard_date": "2023-07-06",
        "heard_time": "15:45:00",
        "location": "Latitude3, Longitude3",
        "satellite_id": "3",
        "submission_time": "2023-07-06 07:37:32"
    },
    {
        "id": "2",
        "call_sign": "BI4KZZ",
        "submitter_call_sign": "Submitter2",
        "heard_date": "2023-07-06",
        "heard_time": "15:30:00",
        "location": "Latitude2, Longitude2",
        "satellite_id": "2",
        "submission_time": "2023-07-06 07:37:32"
    },
    {
        "id": "12",
        "call_sign": "BI3AR",
        "submitter_call_sign": "Submitter2",
        "heard_date": "2023-07-06",
        "heard_time": "15:30:00",
        "location": "Latitude2, Longitude2",
        "satellite_id": "2",
        "submission_time": "2023-07-06 07:40:46"
    },
    {
        "id": "17",
        "call_sign": "2M0SQL",
        "submitter_call_sign": "Submitter2",
        "heard_date": "2023-07-06",
        "heard_time": "15:30:00",
        "location": "Latitude2, Longitude2",
        "satellite_id": "2",
        "submission_time": "2023-07-06 07:41:47"
    },
    {
        "id": "1",
        "call_sign": "BI4KZZ",
        "submitter_call_sign": "Submitter1",
        "heard_date": "2023-07-06",
        "heard_time": "15:15:00",
        "location": "Latitude1, Longitude1",
        "satellite_id": "1",
        "submission_time": "2023-07-06 07:37:32"
    },
    {
        "id": "11",
        "call_sign": "BI3AR",
        "submitter_call_sign": "Submitter1",
        "heard_date": "2023-07-06",
        "heard_time": "15:15:00",
        "location": "Latitude1, Longitude1",
        "satellite_id": "1",
        "submission_time": "2023-07-06 07:40:46"
    },
    {
        "id": "16",
        "call_sign": "2E0EBM",
        "submitter_call_sign": "Submitter1",
        "heard_date": "2023-07-06",
        "heard_time": "15:15:00",
        "location": "Latitude1, Longitude1",
        "satellite_id": "1",
        "submission_time": "2023-07-06 07:41:47"
    },
    {
        "id": "10",
        "call_sign": "BI4KZZ",
        "submitter_call_sign": "Submitter5",
        "heard_date": "2023-07-02",
        "heard_time": "16:15:00",
        "location": "Latitude5, Longitude5",
        "satellite_id": "5",
        "submission_time": "2023-07-06 07:38:18"
    },
    {
        "id": "9",
        "call_sign": "BI4KZZ",
        "submitter_call_sign": "Submitter4",
        "heard_date": "2023-07-01",
        "heard_time": "16:00:00",
        "location": "Latitude4, Longitude4",
        "satellite_id": "4",
        "submission_time": "2023-07-06 07:38:18"
    },
    {
        "id": "8",
        "call_sign": "BI4KZZ",
        "submitter_call_sign": "Submitter3",
        "heard_date": "2023-06-30",
        "heard_time": "15:45:00",
        "location": "Latitude3, Longitude3",
        "satellite_id": "3",
        "submission_time": "2023-07-06 07:38:18"
    },
    {
        "id": "7",
        "call_sign": "BI4KZZ",
        "submitter_call_sign": "Submitter2",
        "heard_date": "2023-06-29",
        "heard_time": "15:30:00",
        "location": "Latitude2, Longitude2",
        "satellite_id": "2",
        "submission_time": "2023-07-06 07:38:18"
    },
    {
        "id": "6",
        "call_sign": "BI4KZZ",
        "submitter_call_sign": "Submitter1",
        "heard_date": "2023-06-28",
        "heard_time": "15:15:00",
        "location": "Latitude1, Longitude1",
        "satellite_id": "1",
        "submission_time": "2023-07-06 07:38:18"
    },
    {
        "id": "28",
        "call_sign": null,
        "submitter_call_sign": null,
        "heard_date": null,
        "heard_time": null,
        "location": null,
        "satellite_id": null,
        "submission_time": "2023-07-06 06:01:12"
    },
    {
        "id": "29",
        "call_sign": null,
        "submitter_call_sign": null,
        "heard_date": null,
        "heard_time": null,
        "location": null,
        "satellite_id": null,
        "submission_time": "2023-07-06 06:01:36"
    }
];

export default function DataTable() {
    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                disableRowSelectionOnClick={true}
            />
        </div>
    );
}