(function () {
    var PostDeleteFirstLevelPage = YYC.Class(PostFirstLevelPage, {
        Protected: {
            //返回指定日期。
            //因为不需要计算百分比数据，所以父类FirstLevelPage的getAndShowData的ajax只需获得指定日期数据
            P__getBeginDate:function(selectDate){
                return selectDate;
            }
        }
    });

    window.PostDeleteFirstLevelPage = PostDeleteFirstLevelPage;
}());