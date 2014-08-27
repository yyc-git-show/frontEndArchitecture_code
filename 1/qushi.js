(function () {
    window.qushi = (function () {
        var _ajaxData = {	//接口数据
            url: "/postCheck/get_check_data",
            name: "贴子审核量",
            field: "num"
        };
...
        return {
            getAndShowChart: function () {
                var selectDate = null;

                selectDate = controlDatePicker.getSelectDate();

                $.getJSON(_ajaxData.url, {
                    begin_date: _getStartDate(selectDate),		//获得selectDate-7的日期
                    end_date: selectDate
                }, function (dataArr) {
                    var seriesDataArr = _getSeriesDataArr(dataArr);	//获得包含date和num字段的数组
                    chartHelper.draw("chart", seriesDataArr);
                });
            },
            init: function () {
                this._initEvent();
            }
        }
    }());
}());
