(function () {
    var FirstLevelPage = YYC.AClass(Page, {
        Init: function (item) {
            this.base(item);
        },
        Private: {
...
        },
        Protected: {
            P_showPercent: function () {
                ...
            },

            Virtual: {
                P_showData: function (dataArr) {
                    var num = this._getNum(dataArr);

                    this._showNum(num);
                }
            },

            Abstract: {
                P_getBeginDate: function () {
                }
            }
        },
        Public: {
            id: "firstLevelPage",

            getAndShowData: function (selectDate) {
                var self = this;

                $.getJSON(this.P_ajaxData.url, {
                    begin_date: this.P_getBeginDate(selectDate),
                    end_date: selectDate
                }, function (dataArr) {
                    self.P_showData(dataArr);
                });
            },
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
            init: function () {
            }
        }
    });

    window.FirstLevelPage = FirstLevelPage;
}());

