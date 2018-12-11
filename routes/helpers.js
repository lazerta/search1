const  hb = require('hbs');
hb.registerHelper('active',active());
function active(type, target ='sites') {
    if (type === target) return 'active'
}
