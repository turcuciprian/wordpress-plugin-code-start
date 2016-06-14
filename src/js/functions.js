    var abFunctions = function() {
        //global this save
        var gThis = this;
        // check if a string is json
        this.IsJsonString = function(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        };
        // unique name for array object with name parameter
        this.uniqueName = function(origName, entireArray, k, elem) {
            k = (typeof k !== 'undefined' ? k : 1); //optional parameter. Default 1
            elem = (typeof elem !== 'undefined' ? elem : 'name'); //optional parameter. Default name
            //temporary new name
            var tempName = (origName + k).toString();
            var result = tempName;
            //loop entire array to check for new name if it exists
            entireArray.forEach(function(arr, i) {
                // if new name exists, search for next one
                if (tempName == arr[elem]) {
                    k++;
                    result = gThis.uniqueName(origName, entireArray, k, elem);
                }
            });
            //if new name was not found, return it
            return result;
        };
        //swap items from given array
        this.swapItems = function(tArray, a, b) {
            var varA = tArray[a];
            var varB = tArray[b];
            tArray[a] = varB;
            tArray[b] = varA;
            return tArray;
        };
        this.isJsonString = function(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        };

        //External simple variables:
        this.aBMainOrig = function() {
            var tempObj = {
                menus: [{
                    label: 'Posts',
                    type: 'post',
                    name: 'posts',
                    unique: true,
                    children: []
                }, {
                    label: 'Pages',
                    type: 'page',
                    name: 'pages',
                    unique: true,
                    children: []
                },{
                    label: 'Sidebars',
                    type: 'sidebars',
                    name: 'sidebars',
                    unique: true,
                    pageTitle: 'Custom Sidebar',
                    pageDescription: 'Custom Sidebar Description',
                    capability: 'manage_options',
                    handler: 'ab_menu_handler',
                    children: [],
                },{
                    label: 'Widgets',
                    type: 'widgets',
                    name: 'widgets',
                    unique: true,
                    pageTitle: 'Custom Widget',
                    pageDescription: 'Custom widget Description',
                    capability: 'manage_options',
                    handler: 'ab_menu_handler',
                    children: [],
                },{
                    label: 'Taxonomies',
                    type: 'toaxonomies',
                    name: 'taxonomies',
                    unique: true,
                    pageTitle: 'Custom Taxonomy',
                    pageDescription: 'Custom Taxonomy Description',
                    capability: 'manage_options',
                    handler: 'ab_menu_handler',
                    children: [],
                },{
                    label: 'TinyMCE Buttons',
                    type: 'tinyMCE',
                    name: 'tinyMCE',
                    unique: true,
                    pageTitle: 'Custom TinyMCE Buttons',
                    pageDescription: 'Custom TinyMCE Button Description',
                    capability: 'manage_options',
                    handler: 'ab_menu_handler',
                    children: [],
                }]
            };
            return tempObj;
        };

        this.downloadInnerFile = function(filename, elId, jsonString) {
            var elHtml1 = document.getElementById(elId + '1').innerHTML;
            var link = document.createElement('a');
            mimeType = 'text' || 'text/plain';
            jsonString = jsonString.replace(/'/g, "\\'");

            var funcString = '\n$theJson = \'' + jsonString + '\';';
            funcString += '\n$lfp = new loadFromPlugin();';
            funcString += '\n$lfp->load($theJson);';
            elHtml = '<?php \n ' + elHtml1 + funcString+'\n }';
            elHtml = unescape(elHtml);
            elHtml = elHtml.replace('&gt;', ">");
            elHtml = elHtml.replace('&gt;', ">");
            elHtml = elHtml.replace('||if1||',"if(isset($_GET['action']) && $_GET['action']==='install-plugin' && isset($_GET['plugin']) && $_GET['plugin']==='admin-builder'){return;}");

            link.setAttribute('download', filename);
            link.setAttribute('href', 'data:' + 'text;data:attachment/php;charset=utf-8,' + encodeURIComponent(elHtml));
            // window.open("text;data:attachment/php;charset=utf-8," + encodeURIComponent(elHtml));
            link.click();
        };

    };
