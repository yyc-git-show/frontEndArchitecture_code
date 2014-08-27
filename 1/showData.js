(function () {
    window.showData = (function () {
        var _ajaxData = {	//接口数据
            url: "/postCheck/get_check_data",
            name: "贴子审核量",
            field: "num"
        };
...
        return {
            getAndShowData: function (selectDate) {
                $.getJSON(_ajaxData.url, {
                    begin_date: selectDate,
                    end_date: selectDate
                }, function (dataArr) {
                    var num = _getNum(dataArr);	//取出num字段

                    _showNum(num);
                });
            },
            init: function () {
                this._initEvent();
            }
        }
    }());
}());
