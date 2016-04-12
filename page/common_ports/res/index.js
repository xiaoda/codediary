/* 原始数据 */
var PORTS_DATA = [
    {name: 'Apache', port: 80},
    {name: 'CouchDB', port: 5984},
    {name: 'Django', port: 8000},
    {name: 'Expressjs', port: 3000},
    {name: 'FastCGI', port: 9000},
    {name: 'FTP', port: 20},
    {name: 'FTP', port: 21},
    {name: 'Ghostjs', port: 2368},
    {name: 'Jekyll', port: 4000},
    {name: 'Koajs', port: 3000},
    {name: 'Lighttpd', port: 80},
    {name: 'MongoDB', port: 27017},
    {name: 'Meteor', port: 3000},
    {name: 'MySQL', port: 3306},
    {name: 'Nginx', port: 80},
    {name: 'Oracle', port: 1521},
    {name: 'PPTP', port: 1723},
    {name: 'Redis', port: 6379},
    {name: 'Ruby on Rails', port: 3000},
    {name: 'Socks', port: 1080},
    {name: 'SQL Server', port: 1433},
    {name: 'SSDB', port: 8888},
];
var RESULT = {
    table: false,
}

/* 根据数据生成表格 */
function generateTable(id, data, regExp){
    var $table = $('table#' + id);
    if(!$table.length) return false;
    var template = '<tr><td>{{port}}</td><td>{{name}}</td></tr>';
    var html = '';
    var tableData = _.groupBy(data, 'port');
    for(var i in tableData){
        var tmpNames = [];
        var tmpPort = i;
        if(regExp) {
            tmpPort = tmpPort.replace(regExp, '<span class="hit">$&</span>');
        }
        for(var j in tableData[i]){
            var tmpName = tableData[i][j]['name'];
            if(regExp) {
                tmpName = tmpName.replace(regExp, '<span class="hit">$&</span>');
            }
            tmpNames.push(tmpName);
        }
        html += template.replace('{{port}}', tmpPort).replace('{{name}}', tmpNames.join(' , '));
    }
    $table.find('tbody').empty().html(html);

    return true;
}

/* 搜索栏 */
$('body').on('input', '#inputSearch', function(){
    var search = $(this).val();
    if(search){
        var data = [];
        var tmpRegExp = new RegExp(search.toLowerCase(), 'ig');
        _.each(PORTS_DATA, function(value, key, list){
            _.each(value, function(v, k, l){
                if(tmpRegExp.test(String(v).toLowerCase())){
                    data.push(value);
                }
            });
        });
        RESULT.table = generateTable('portsTable', data, tmpRegExp);
    }else{
        RESULT.table = generateTable('portsTable', PORTS_DATA);
    }
});

/* 初始化 */
function init(){
    RESULT.table = generateTable('portsTable', PORTS_DATA);
}

/* play jazz! */
init();
