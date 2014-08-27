window.main = {
    init: function () {
//        window.postFirstLevelPage = new PostFirstLevelPage();
//        window.commentFirstLevelPage = new CommentFirstLevelPage();

        window.postCheckFirstLevelPage = new PostCheckFirstLevelPage();
        window.postDeleteFirstLevelPage = new PostDeleteFirstLevelPage();
        window.commentCheckFirstLevelPage = new CommentCheckFirstLevelPage();
        window.commentDeleteFirstLevelPage = new CommentFirstLevelPage();

        window.postCheckFirstLevelPage.init();
        window.postDeleteFirstLevelPage.init();
        window.commentCheckFirstLevelPage.init();
        window.commentDeleteFirstLevelPage.init();

        //传入选项id前缀和firstLevelPage实例
        window.postSecondLevelPage = new SecondLevelPage("post", window.postFirstLevelPage);
        window.commentSecondLevelPage = new SecondLevelPage("comment",window.commentFirstLevelPage);

        postSecondLevelPage.init();
        commentSecondLevelPage.init();

        controlTab.initTabEvent();
        controlDatePicker.initDatePicker();
    }
};