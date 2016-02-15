/* 原始数据 */
var ORIGIN_DATA = {
    'apache': {'port': '80', 'name': 'Apache'},
    'express': {'port': '3000', 'name': 'Express'},
    'fastcgi': {'port': '9000', 'name': 'FastCGI'},
    'mongodb': {'port': '27017', 'name': 'MongoDB'},
    'mysql': {'port': '3306', 'name': 'MySQL'},
    'nginx': {'port': '80', 'name': 'Nginx'},
    'redis': {'port': '6379', 'name': 'Redis'},
}
var PORTS_DATA = {};
var RESULT = {
    table: false,
}

/* Object按key排序 */
function _sortNum(a, b){
    return a - b
}

function sortObj(obj, sort){
    if(!Object.keys(obj).length) return false;
    if(!sort) sort = 'asc';
    var keys = [];
    var prefix = '';
    var result = {};
    for(var i in obj){
        var tmpMatch = i.match(/\d+/);
        if(tmpMatch){
            if(!prefix) prefix = i.match(/^[^\d]+/)[0];
            keys.push(Number(tmpMatch[0]));
        }else{
            keys.push(i);
        }
    }
    switch(sort){
        case 'asc':
            keys = keys.sort(_sortNum);
            break;
        case 'desc':
            keys = keys.sort(_sortNum).reverse();
            break;
    }
    for(var i in keys){
        if(prefix){
            result[prefix + keys[i]] = obj[prefix + keys[i]];
        }else{
            result[keys[i]] = obj[keys[i]];
        }
    }
    return result;
}

/* 处理原始数据 */
function generatePortsData(origin){
    if(!Object.keys(origin).length) return false;
    /* 以端口号为key & 以小写软件名字为key */
    var result = {
        'byPort': {},
        'byName': {},
    };
    for(var i in origin){
        result['byName'][i] = {'port': origin[i]['port'], 'name': origin[i]['name']};
        /* 连接相同端口号软件 */
        if(result['byPort']['p' + origin[i]['port']]){
            result['byPort']['p' + origin[i]['port']]['name'].push(origin[i]['name']);
        }else{
            result['byPort']['p' + origin[i]['port']] = {'name': [origin[i]['name']], 'port': origin[i]['port']};
        }
    }
    for(var i in result['byPort']){
        result['byPort'][i].name = result['byPort'][i].name.sort().join(',');
    }
    return result;
}

/* 根据数据生成表格 */
function generateTable(id, data){
    var $table = $('table#' + id);
    if(!$table.length) return false;
    var template = '<tr><td>{{port}}</td><td>{{name}}</td></tr>';
    var html = '';
    data = sortObj(data);
    for(var i in data){
        html += template.replace('{{port}}', i.match(/\d+/)[0]).replace('{{name}}', data[i]['name']);
    }
    $table.find('tbody').empty().html(html);

    return true;
}

/* 页面初始化 */
function init(){
    PORTS_DATA = generatePortsData(ORIGIN_DATA);
    RESULT.table = generateTable('portsTable', PORTS_DATA['byPort']);
}

/* 搜索栏 */
$('body').on('input', '#inputSearch', function(){
    var search = $(this).val();
    if(search){
        var data = {};
        var tmpItem;
        tmpItem = Object.keys(PORTS_DATA['byName']);
        if(/^\d+$/.test(search)){ /* 匹配端口 */
            tmpItem = Object.keys(PORTS_DATA['byPort']);
            for(var i in tmpItem){
                if(new RegExp(search).test(tmpItem[i])){
                    data['p' + PORTS_DATA['byPort'][tmpItem[i]]['port']] = PORTS_DATA['byPort'][tmpItem[i]];
                }
            }
        }else{ /* 匹配名字 */
            for(var i in tmpItem){
                if(new RegExp(search).test(tmpItem[i])){
                    data['p' + PORTS_DATA['byName'][tmpItem[i]]['port']] = PORTS_DATA['byName'][tmpItem[i]];
                }
            }
        }
        RESULT.table = generateTable('portsTable', data);
    }else{
        RESULT.table = generateTable('portsTable', PORTS_DATA['byPort']);
    }
});

/* play jazz! */
init();
