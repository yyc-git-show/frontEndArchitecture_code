(function () {
    var Item = YYC.AClass({
        Init: function (tab) {
            this._tab = tab;
        },
        Private: {
            _tab: null
        },
        Protected: {
            Abstract: {
                P_firstLevelPage: null,
                P_secondLevelPage: null
            }
        },
        Public: {
            itemData: null,

            getTabId: function () {
                return this._tab.id;
            },
            getTitleName: function () {
                return this._tab.name + this.name;
            },
            getSelectDate: function () {
                return this._tab.getSelectDate();
            },
            initWhenCreate: function () {
                this.itemData = getItemData(this._tab.id, this.id); //获得数据项数据
            },
            init: function () {
                this.P_firstLevelPage.init();
                this.P_secondLevelPage.init();
            },
            getAndShowFirstLevelData: function (selectDate) {
                this.P_firstLevelPage.getAndShowData(selectDate);
            },
            getFirstLevelChartData: function (selectDate) {
                return this.P_firstLevelPage.getChartData(selectDate);
            },
            getAndShowSecondLevelPage: function () {
                this.P_secondLevelPage.getAndShowChart();
            },
            showSecondLevelPagePage: function () {
                this.P_secondLevelPage.showPage();
            }
        }   ,
        Abstract: {
            name: null, //数据项名称
            id: null    //数据项识符，对应domId的数据项前缀
        }
    });

    window.Item = Item;
}());
