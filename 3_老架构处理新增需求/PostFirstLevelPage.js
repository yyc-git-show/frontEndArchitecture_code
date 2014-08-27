(function () {
    var PostFirstLevelPage = YYC.AClass(FirstLevelPage, {     //改为抽象类
        Init: function () {
            this.base("post");  //传入选项前缀

            //接口数据
            this.P_ajaxData = {
...
            };
        }
    });

    window.PostFirstLevelPage = PostFirstLevelPage;
}());
