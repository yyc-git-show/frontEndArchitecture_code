getChartData: function (selectDate) {
    var seriesDataArr = [],
        ajaxData = null,
        self = this;

    ajaxData = this.P_ajaxData;

    $.ajax({
        url: ajaxData.url,
        data: {
            begin_date: _getStartDate(selectDate),		//获得selectDate-7的日期
            end_date: selectDate
        },
        dataType: "json",
        async: false,  //同步
        success: function (dataArr) {
            seriesData = self.P_getSeriesData(dataArr, self._item.getTitleName());
        }
    });

    return seriesDataArr;
},
