(function () {
    var Page = YYC.AClass({
        Init: function (item) {
            this.P_item = item;
        },
        Private: {
...
        },
        Protected: {
            P_ajaxData: null,
            P_item:null,

            //构造domId前缀
            P_getPrefixId: function () {
                return this.P_item.getTabId() + "_" + this.P_item.id + "_" +  this.id +"_";
            },
            P_getSeriesData: function (dataArr) {
...
            },
            P_draw: function (dataArr) {
                chartHelper.draw(this.P_getPrefixId() + "chart", dataArr);
            }
        },
        Public: {
            initWhenCreate: function () {
                //获得item的一级或二级页面接口数据
                this.P_ajaxData = this.P_item.itemData[this.id];
            }
        }     ,
        Abstract: {
            id: null    //页面标识符，对应domId的页面前缀
        }
    });

    window.Page = Page;
}());