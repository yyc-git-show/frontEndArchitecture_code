(function () {
    window.controlDatepicker = (function () {
        var _selectDate = null,
            el_datepicker = $("#datepickerContainer"),
            el_date = $("#datepicker");

...
        function _onchange() {
            showData.getAndShowData(_selectDate);
        }

        return {
            //选中前一天
            goPrevDate: function (e) {
...
                _onchange();
            },
            //选中后一天
            goNextDate: function (e) {
...
                _onchange();
            },
            initDatepicker: function () {
                var self = this;

...

                el_date.datepicker().on('changeDate', function (e) {
                    self.setSelectDate(moment(e.date));
                    _onchange();
                });

                _updateSelectDate(moment().format("YYYY-MM-DD"));
            },
            getSelectDate: function () {
                return _selectDate;
            },
            setSelectDate: function (date) {
                var _selectDateFormat = "YYYYMMDD";

                if (!date.format) {
                    throw new Error("参数必须为moment实例");
                }

                _selectDate = date.format(_selectDateFormat);
            }
        };
    }());
}());
