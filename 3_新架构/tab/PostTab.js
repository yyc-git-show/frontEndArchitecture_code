(function () {
    var PostTab = YYC.Class(Tab, {
        Public: {
            name: "贴子",
            id: "post"
        },
        Static: {
            create: function () {
                var tab = new this();

                tab.initWhenCreate();

                return tab;
            }
        }
    });

    window.PostTab = PostTab;
}());