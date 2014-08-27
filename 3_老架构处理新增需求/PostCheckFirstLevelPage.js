(function () {
    var PostCheckFirstLevelPage = YYC.Class(PostFirstLevelPage, {
        Protected: {
            P__showData: function (dataArr) {
                this.base(dataArr);

                this.P__showPercent(dataArr);  //显示百分比数据
            }   ,
            //返回前一天日期。
            //这样父类FirstLevelPage的getAndShowData方法中的ajax可获得指定日期和前一天的数据，从而按照“百分比 = （指定日期的审核量 – 前一天的审核量） /前一天的审核量”的公式计算百分比数据
            P__getBeginDate:function(selectDate){
                return moment(selectDate, formatStr).subtract("days", 1).format("YYYYMMDD");
            }
        }
    });

    window.PostCheckFirstLevelPage = PostCheckFirstLevelPage;
}());