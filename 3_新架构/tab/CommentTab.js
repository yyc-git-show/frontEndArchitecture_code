(function () {
    var CommentTab = YYC.Class(Tab, {
        Public: {
            name: "评论",
            id: "comment"
        },
        Static: {
            create: function () {
                var tab = new this();

                tab.initWhenCreate();

                return tab;
            }
        }
    });

    window.CommentTab = CommentTab;
}());