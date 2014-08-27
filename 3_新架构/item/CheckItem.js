(function () {
    var CheckItem = YYC.Class(Item, {
        Protected: {
            P_firstLevelPage: null,
            P_secondLevelPage: null
        },
        Public: {
            id: "check",
            name: "审核量",

            initWhenCreate: function () {
                this.base();

                this.P_firstLevelPage = PercentFirstLevelPage.create(this); //创建可显示百分比的firstLevelPage实例
                this.P_secondLevelPage = SecondLevelPage.create(this, this.P_firstLevelPage);
            }
        },
        Static: {
            create: function (tab) {
                var item = new this(tab);

                item.initWhenCreate();

                return item;
            }
        }
    });

    window.CheckItem = CheckItem;
}());
