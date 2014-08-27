(function () {
    window.controlDatepicker = (function () {
        var _selectDate = null,
            el_datepicker = $("#datepickerContainer"),
            el_date = $("#datepicker");

...
        function _onchange() {
            window.postFirstLevelPage.refreshData(_selectDate); //更新一级页面
            window.commentFirstLevelPage.refreshData(_selectDate);  //更新一级页面

            window.postSecondLevelPage.setSelectDate(_selectDate);
            window.commentSecondLevelPage.setSelectDate(_selectDate);
        }

        return {
            goPrevDate: function (e) {
                var target = $(e.srcElement || e.target),
                    date = null;

                target.attr("class", "button-click");

                _makeNextbuttonEnabled(target.next());

                date = moment(_getSelectDateStr(), "YYYY-MM-DD");
                date.add("days", -1);

                _updateSelectDate(date.format("YYYY-MM-DD"));

                this.setSelectDate(date);
                this._onchange();
            },
            goNextDate: function (e) {
                var target = $(e.srcElement || e.target),
                    date = null;

                target.prev().attr("class", "button");

                date = moment(_getSelectDateStr(), "YYYY-MM-DD");
                date.add("days", 1);

                if (_isOrAfterEndDate(date)) {
                    date = _getEndDate();
                    _makeNextbuttonDisabled(target);

                }
                else {
                    target.attr("class", "button-click");
                }


                _updateSelectDate(date.format("YYYY-MM-DD"));
                this.setSelectDate(date);
                this._onchange();
            },
            initDatepicker: function () {
                var self = this;

                el_date.datepicker({
                    format: "yyyy-mm-dd",
                    endDate: new Date(),
                    autoclose: true
                });

                el_date.datepicker().on('changeDate', function (e) {
                    self.setSelectDate(moment(e.date));
                    self._onchange();
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
