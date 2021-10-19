import request from "../utils/request";


//定义全部舆情参数规则
interface reportParams {
    page: string | number;
    pageSize: string | number;
    startTime: string | number;
    endTime: string | number;
}
//获取全部舆情列表
let getAllReportList  = (params:reportParams)=> {return request({url : "reportList", method : "GET", params})}


//report
export default {
    getAllReportList
}