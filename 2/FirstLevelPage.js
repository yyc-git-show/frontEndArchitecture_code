(function () {
    var FirstLevelPage = YYC.AClass(Page, {
        Init: function (tab) {
            this.base(tab, "firstLevelPage"); //传入页面id前缀
        },
        Private: {
...
        },
        Public: {
            getAjaxData: function () {
                return this.P_ajaxData;
            },
            getAndShowData: function (selectDate) {
                var i = null,
                    self = this;

                //显示选项所有数据项的指定日期的数据
                for (i in this.P__ajaxData) {
                    if (this.P__ajaxData.hasOwnProperty(i)) {
                        (function (ajaxData) {
                            $.getJSON(ajaxData.url, {
                                begin_date: selectDate,
                                end_date: selectDate
                            }, function (dataArr) {
                                var num = self._getNum(dataArr);

                                self._showNum(num);
                                ajaxData = null;
                            });
                        }(this.P__ajaxData[i]));
                    }
                }
            },
            getAndShowChart: function (selectDate) {
                var seriesDataArr = [],
                    i = null,
                    ajaxData = null,
                    self = this;

                //先获得选项所有数据项的趋势数据，然后一次绘制出选项趋势图
                for (i in this.P_ajaxData) {
                    if (this.P_ajaxData.hasOwnProperty(i)) {
                        (function (ajaxData) {
                            $.ajax({
                                url: ajaxData.url,
                                data: {
                                    begin_date: _getStartDate(selectDate),		//获得selectDate-7的日期
                                    end_date: selectDate
                                },
                                dataType: "json",
                                async: false,  //同步
                                success: function (dataArr) {
                                    seriesDataArr.push(self.P_getSeriesData(dataArr, i, ajaxData.field));
                                    ajaxData = null;
                                }
                            });
                        }(this.P_ajaxData[i]));
                    }
                }
                this.P_draw(seriesDataArr);
            },
            refreshData: function (selectDate) {
                this.getAndShowChart(selectDate);
                this.getAndShowData(selectDate);
            },
            init: function () {
                this._initEvent();
            }
        }
    });

    window.FirstLevelPage = FirstLevelPage;
}());
