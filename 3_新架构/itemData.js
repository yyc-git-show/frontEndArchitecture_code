(function () {
    var getItemData = (function () {
        var data = function () {
            return {
                post: {
                    check: {
                        url: "/postCheck/get_check_data",
                        field: "num"
                    },
                    delete: {
                        url: "/postCheck/get_delete_data",
                        field: "delete"
                    }
                },
                comment: {
                    check: {
                        url: "/commentCheck/get_check_data",
                        field: "num"
                    },
                    delete: {
                        url: "/commentCheck/get_delete_data",
                        field: "delete"
                    }
                }
            }
        };

        return function (tabId, itemId) {
            return data()[tabId][itemId];
        };
    }());

    window.getItemData = getItemData;
}());