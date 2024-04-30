// Copyright (c) 2024, Sejal Pachaghare and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Airline", {
// 	refresh(frm) {

// 	},
// });

// frappe.ui.form.on('Airline', {
//     refresh: function(frm) {
//         // Check if the Website field is not empty
//         if (frm.doc.website) {
//             // Add custom web link to the form view
//             frm.add_custom_button('Official Website', function() {
//                 // Open the official website URL in a new tab
//                 window.open(frm.doc.website, '_blank');
//             }).addClass('btn-primary');
//         }
//     }
// });


// frappe.ui.form.on('Airline', {
//     refresh: function(frm) {
//         if (frm.doc.website) {
//             frm.add_web_link(frm.doc.website, 'Official Website').addClass('btn-primary');
//         } else {
//             // Remove the button if the website is not provided
//             frm.remove_custom_button('Official Website');
//         }
//     }
// });



frappe.ui.form.on('Airline', {
    refresh(frm) {
       const website = frm.doc.website ;
       frm.add_web_link(website, "Visit Website");
    }
});