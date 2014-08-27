var controlTab = {
    _classTable: {
        "发贴审核": "postFirstLevelPage",
        "评论审核": "commentFirstLevelPage"
    },
    _currentTabText: "发贴审核",

    findSelectTab: function () {
        return this._classTable[this._currentTabText];
    },
    initTabEvent: function () {
        var self = this;

        $(".container header li").on("click", function (e) {
...

            self._currentTabText = $(this).text();

            window[self.findSelectTab()].refreshData(self._selectDate);    //刷新当前选项数据
        });
    }
};