import { connect } from 'react-redux';
import FilterTable from './FilterTable';
import { fetchScheduleData, fetchEditData, fetchDeleteData, reqScheduleDataSuccess } from '../../redux/actions';
import { setVisibleColumns, setInitialColumns } from '../../redux/reducers/hideColumnReducer/actions';

const mapStateToProps = (state: any) => {
  return {
    loading: state.scheduleData.loading,
    error: state.scheduleData.error,
    data: state.scheduleData.data,
    timeZone: state.timeZoneData.timeOffset,
    adminMode: state.userMode.isAdmin,
    columnTitles: state.hideColumnData.columnArray,
    userPreferences: state.userPreferences,
    viewData: state.scheduleViewData.viewData,
  };
};

const mapDispatchToProps = {
  fetchScheduleData,
  setVisibleColumns,
  setInitialColumns,
  fetchEditData,
  fetchDeleteData,
  reqScheduleDataSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterTable);
