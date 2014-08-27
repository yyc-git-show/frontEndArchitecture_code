(function () {
    window.main = {
        init: function () {
            window.postFirstLevelPage = new PostFirstLevelPage();
            window.commentFirstLevelPage = new CommentFirstLevelPage();

            //在创建实例时传入二级页面的选项id前缀和firstLevelPage实例
            window.postSecondLevelPage = new SecondLevelPage("post", window.postFirstLevelPage);
            window.commentSecondLevelPage = new SecondLevelPage("comment",window.commentFirstLevelPage);

            controlTab.initTabEvent();

            postFirstLevelPage.init();
            commentFirstLevelPage.init();

            postSecondLevelPage.init();
            commentSecondLevelPage.init();

            controlDatePicker.initDatePicker();
        }
    }

}());
