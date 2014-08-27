(function () {
    var PostFirstLevelPage = YYC.Class(FirstLevelPage, {
        Init: function () {
            this.base("post");  //传入选项前缀

            this.P_ajaxData = {
                "发贴审核贴子审核量": {
                    url: "/postCheck/get_check_data",
                    name: "贴子审核量",
                    field: "num",
                    domId: {
                        num: "#post_check_firstLevelPage_num" //“审核量”数据项的指定日期数据显示对应的domId
                    }
                },
                "发贴审核贴子删除量": {
                    url: "/postCheck/get_delete_data",
                    name: "贴子删除",
                    field: "delete" ,
                    domId: {
                        num: "#post_delete_firstLevelPage_num"  //“删除量”数据项的指定日期数据显示对应的domId
                    }
                }
            };
        }
    });

    window.PostFirstLevelPage = PostFirstLevelPage;
}());
