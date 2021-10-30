var MODEL = (function(){
    var _changeRoute = function(){
        let hashTag = window.location.hash;
        let pageID = hashTag.replace("#", "");
        //console.log(hashTag + " " + pageID);

        if(pageID != "") {
            $.get(`pages/${pageID}.html`, function(data) {
                //console.log("data " + data);
                $("#app").html(data);
                bodyListeners();
            });
        } else {
            $.get(`pages/home.html`, function(data) {
                //console.log("data " + data);
                $("#app").html(data);
                bodyListeners();
            });
        };
    };

    return {
        changeRoute: _changeRoute,
    }
})();