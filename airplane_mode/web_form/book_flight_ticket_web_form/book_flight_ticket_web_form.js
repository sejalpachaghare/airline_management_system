// frappe.ready(function() {
// 	// bind events here
// })

// frappe.ready(() => {
// 	frappe.web_form.set_value("flight_price",2000)  });

frappe.ready(function() {
    var randomPrice = Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;
    frappe.web_form.set_value(["flight_price"], [randomPrice]);
});