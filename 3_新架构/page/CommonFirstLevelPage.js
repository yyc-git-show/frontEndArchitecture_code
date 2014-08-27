(function () {
    var CommonFirstLevelPage = YYC.Class(FirstLevelPage, {
        Protected: {
            P__getBeginDate: function (selectDate) {
                return selectDate;
            }
        },
        Static: {
            create: function (item) {
                var page = new this(item);

                page.initWhenCreate();

                return page;
            }
        }
    });

    window.CommonFirstLevelPage = CommonFirstLevelPage;
}());
