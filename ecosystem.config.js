module.exports = {
  apps : [{
    "name": "muon-light-shield-node",
    "script": "npm",
    "args" : "start",
    "watch"  : false,
    "ignore_watch": ["node_modules"],
    "log_date_format" : "YYYY-MM-DD HH:mm",
    "autorestart": false,
    "max_memory_restart": "2G"
  }]
}
