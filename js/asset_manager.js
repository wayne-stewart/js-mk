
var AssetManager = function() {

    var images = [];
    var sounds = [];

    var loadImageAsync = function(item) {
        var promise = new Promise(function(resolve, reject) {
            var image = new Image();
            image.onload = function() { 
                images[item.name] = {
                    image: image
                };
                resolve();
            };
            image.src = item.url;
        });
        return promise;
    };

    this.loadAllAsync = function(manifest, progressCallback) {
        var promises = new Array();
        for(var i = 0; i < manifest.length; i++) {
            var item = manifest[i];
            promises.push(loadImageAsync(item));
        }
        return Promise.all(promises);
    };

    this.getImage = function(name) {
        return images[name];
    };

    this.getSound = function(name) {
        return sounds[name];
    };
};

