(function () {
    var PercentFirstLevelPage = YYC.Class(FirstLevelPage, {
        Protected: {
            P__showData: function (dataArr) {
                this.base(dataArr);

                this.P__showPercent(dataArr);  //显示百分比数据
            },
            P__getBeginDate: function (selectDate) {
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
