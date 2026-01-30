$(document).ready(function(){
// Check if the notes widget exists (if user is defined a user is logged in, and if doc_type is defined, you are in a HireHop page)
if(typeof($.custom.notes)!==”undefined” && typeof(user)!==”undefined” && typeof(doc_type)!==”undefined” && hh_api_version<=1.3) {
// Redefine notes widget
$.widget(“custom.notes“, $.custom.notes, {
_init_main: function() {
// Call the old _init_main
this._super();
// You could put the code here or call a new function you created
this.new_function_name();
},
// Add your own new function into the widget if you want
new_function_name: function() {
// Add an hello after the refresh button
$(“<span>“,{ html:” Hello” }).insertAfter(this.btnRefresh);
},
});
}
});

