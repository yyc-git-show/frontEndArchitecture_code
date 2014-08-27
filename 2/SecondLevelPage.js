(function () {
    var SecondLevelPage = YYC.Class({
        Init: function (tab, firstLevelPage) {
            this.base(tab, "secondLevelPage");  //传入页面id前缀

            this._firstLevelPage = firstLevelPage;
        },
        Private: {

...
        },
        Public: {
            getAndShowChart: function () {
                var self = this,
                    seriesDataArr = [],
                    ajaxData = null;

                ajaxData = this._firstLevelPage.getAjaxData();

                $.ajax({
                    url: ajaxData.url,
                    data: {
                        begin_date: _getStartDate(selectDate),		//获得selectDate-7的日期
                        end_date: selectDate
                    },
                    dataType: "json",
                    success: function (dataArr) {
                        //_currentIndexName用来标识当前用户查看的数据项
                        seriesDataArr.push(self.P_getSeriesData(dataArr, self._currentIndexName, ajaxData.field));
                        this.P_draw(seriesDataArr);
                    }
                });
            },
            setSelectDate: function (selectDate) {
                this._selectDate = selectDate;
            },
            init: function () {
                this._initEvent();
            }
        }
    });

    window.SecondLevelPage = SecondLevelPage;
}());