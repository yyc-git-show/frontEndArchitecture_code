(function () {
    var DeleteItem = YYC.Class(Item, {
        Protected: {
            P_firstLevelPage: null,
            P_secondLevelPage: null
        },
        Public: {
            id: "delete",
            name: "删除量",

            initWhenCreate: function () {
                this.base();

                this.P_firstLevelPage = CommonFirstLevelPage.create(this);	//创建普通的firstLevelPage实例
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

    window.DeleteItem = DeleteItem;
}());