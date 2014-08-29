(function () {
    var FirstLevelPage = YYC.AClass(Page, {
        Init: function (tab) {
            this.base(tab, "firstLevelPage"); //传入页面id前缀
        },
        Private: {
...
        },
        Protected: {
            P__showPercent: function () {
                ...
            },

            Virtual: { 
                P__showData: function (dataArr) {
                    var num = this._getNum(dataArr);

                    this._showNum(num);
                }
            },

            Abstract: {
                P__getBeginDate: function () {
                }
            }
        },
        Public: {
            getAndShowData: function (selectDate) {
                var self = this;

                $.getJSON(this.P_ajaxData.url, {
                    begin_date: this.P__getBeginDate(selectDate),
                    end_date: selectDate
                }, function (dataArr) {
                    self.P__showData(dataArr);
                });
            },
            getAndShowChart: function (selectDate) {
 ...
            },
...
        }
    });

    window.FirstLevelPage = FirstLevelPage;
}());
