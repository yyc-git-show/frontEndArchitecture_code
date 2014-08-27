(function () {
    var CommentFirstLevelPage = YYC.Class(FirstLevelPage, {
        Init: function () {
            this.base("comment");  //传入选项前缀

            this.P_ajaxData = {
                "评论审核贴子审核量": {
                    url: "/commentCheck/get_check_data",
                    name: "评论审核量",
                    field: "num",
                    domId: {
                        num: "#comment_firstLevel_check_num" //指定日期数据对应的domId
                    }
                },
                "评论审核贴子删除量": {
                    url: "/commentCheck/get_delete_data",
                    name: "评论删除",
                    field: "delete" ,
                    domId: {
                        num: "#comment_firstLevel_delete_num"  //指定日期数据对应的domId
                    }
                }
            };
        }
    });

    window.CommentFirstLevelPage = CommentFirstLevelPage;
}());