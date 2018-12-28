Tea.context(function () {
    var that = this;

    this.type = this.scheduling.code;
    this.schedulingTypeDescription = null;

    this.changeSchedulingType = function () {
        this.schedulingTypeDescription = this.schedulingTypes.$find(function (k, v) {
            return v.code == that.type;
        }).description;
    };
    this.changeSchedulingType();

    this.hashKey = "";
    if (this.scheduling.code == "hash") {
        this.hashKey = this.scheduling.options.key;
    } else {
        this.hashKey = "${remoteAddr}";
    }

    if (this.scheduling.code == "sticky") {
        this.stickyType = this.scheduling.options.type;
        this.stickyParam = this.scheduling.options.param;
    } else {
        this.stickyType = "cookie";
        this.stickyParam = "Backend";
    }

    this.saveSuccess = function () {
        alert("保存成功");
        window.location = "/proxy/backend?server=" + this.proxy.filename + "#scheduling";
    };
});