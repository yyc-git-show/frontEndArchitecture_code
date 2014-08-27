/**
 * Created with yuanchao.yyc@alibaba-inc.com
 * Date: 2014-08-12
 */
(function () {
    var SecondLevelPage = YYC.Class(Page, {
        Init: function (item, firstLevelPage) {
            this.base(item);

            this._firstLevelPage = firstLevelPage;
        },
        Private: {
            ...
        },
        Public: {
            id: "secondLevelPage",

            getAndShowChart: function () {
                ...
            },
            ...
        },
        Static: {
            create: function (item) {
                return new this(item);
            }
        }
    });

    window.SecondLevelPage = SecondLevelPage;
}());