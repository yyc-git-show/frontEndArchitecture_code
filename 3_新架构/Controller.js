(function () {
    var _instance = null;

    var Controller = YYC.Class({
        Init: function () {
        },
        Private: {
            _tabs: null,

            _initEvent: function () {
                var self = this;

                ui.getTabs().on("click", function (e) {
...
                    self._getCurrentSelectTab().show();
                });
            },
...
        },
        Public: {
            initWhenCreate: function () {
                this._tabs = [];

                this._tabs.push(Post.create());
                this._tabs.push(Comment.create());
            },
            setSelectDate: function (selectDate) {
                this._tabs.map("setSelectDate",[selectDate]);
            },
            refreshData: function (selectDate) {
                this.setSelectDate(selectDate);

                this._getCurrentSelectTab().getAndShowFirstLevelData(selectDate);
                this._getCurrentSelectTab().getAndShowFirstLevelChart(selectDate);
            },
            init: function () {
                this._initEvent();

                controlDatepicker.initDatePicker();
                controlDatepicker.initScroll();

                this._tabs.map("init");
                this._getCurrentSelectTab().show();
            }
        },
        Static: {
            getInstance: function () {
                if (_instance === null) {
                    _instance = new this();
                    _instance.initWhenCreate();
                }
                return _instance;
            }
        }
    });

    window.Controller = Controller;
}());
