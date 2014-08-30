(function () {
    var CommentDeleteFirstLevelPage = YYC.Class(PostFirstLevelPage, {
        Protected: {
            //返回指定日期。
            //因为不需要计算百分比数据，所以父类FirstLevelPage的getAndShowData的ajax只需获得指定日期数据
            P_getBeginDate:function(selectDate){
                return selectDate;
            }
        }
    });

    window.CommentDeleteFirstLevelPage = CommentDeleteFirstLevelPage;
}());