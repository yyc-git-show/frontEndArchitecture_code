(function () {
    var Tab = YYC.AClass({
        Init: function () {

        },
        Private: {
            ...
        },
        Public: {
            getAndShowFirstLevelData: function (selectDate) {
                this._items.map("getAndShowFirstLevelData", [selectDate]);
            },
            getAndShowFirstLevelChart: function (selectDate) {
                var seriesDataArr = [],
                    data = null;

                //Item负责获得图表数据
                this._items.forEach(function (item) {
                    data = item.getFirstLevelChartData(selectDate);
                    if (data) {
                        seriesDataArr.push(data);
                    }
                });

                //Tab负责绘制图表
                this.P_draw(seriesDataArr);
            },
            setSelectDate: function (date) {
                this._selectDate = date;
            },
            getSelectDate: function () {
                return this._selectDate;
            },
            initWhenCreate: function () {
                this._items = [];

                this._items.push(CheckItem.create(this));
                this._items.push(DeleteItem.create(this));
            },
            init: function () {
                this._items.map("init");
            },
            show: function () {
                ui.showTab(this.P_id);
                this.getAndShowFirstLevelData(this._selectDate);
                this.getAndShowFirstLevelChart(this._selectDate);
            },
            ...
        },
        Abstract: {
            name: null, //选项名称
            id: null    //选项标识符，对应domId的选项前缀
        }
    });

    window.Tab = Tab;
}());