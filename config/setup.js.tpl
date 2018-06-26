function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

const cluster_ip_urls_array = [
    'http://silverback.temple.edu:7013',
    'http://silverback.temple.edu:7014',
    'http://silverback.temple.edu:7015',
    'http://silverback.temple.edu:7016'
  ];
  
const flea_ip_address = 'http://silverback.temple.edu:7004';

define('host','datamonkey-dev');
define('port', 4002);
define('database', 'mongodb://localhost/datamonkey-dev');
define('log_level', 'warn');
define('cluster_ip', cluster_ip_urls_array);
define('flea_ip_address', 'http://silverback.temple.edu:7004');
define('fasta_validator', '/home/sweaver/TN93/validate_fasta');
define('hyphy', __dirname + '/node_modules/hyphy/HYPHYMP');
define('cluster_ip_urls_array', cluster_ip_urls_array);
define('default_url', cluster_ip_urls_array[0]);
