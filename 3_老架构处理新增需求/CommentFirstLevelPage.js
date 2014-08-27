(function () {
    var CommentFirstLevelPage = YYC.AClass(FirstLevelPage, {     //改为抽象类
        Init: function () {
            this.base("comment");  //传入选项前缀

            //接口数据
            this.P_ajaxData = {
...
            };
        }
    });

    window.CommentFirstLevelPage = CommentFirstLevelPage;
}());