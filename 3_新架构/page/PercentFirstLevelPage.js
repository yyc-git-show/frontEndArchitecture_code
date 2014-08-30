(function () {
    var PercentFirstLevelPage = YYC.Class(FirstLevelPage, {
        Protected: {
            P_showData: function (dataArr) {
                this.base(dataArr);

                this.P_showPercent(dataArr);  //显示百分比数据
            },
            P_getBeginDate: function (selectDate) {
                return moment(selectDate, formatStr).subtract("days", 1).format("YYYYMMDD");
            }
        },
        Static: {
            create: function (item) {
                var page = new this(item);

                page.initWhenCreate();

                return page;
            }
        }
    });

    window.PercentFirstLevelPage = PercentFirstLevelPage;
}());
