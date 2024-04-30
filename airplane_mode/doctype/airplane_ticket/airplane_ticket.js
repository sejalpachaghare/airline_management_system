// Copyright (c) 2024, Sejal Pachaghare and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Airplane Ticket", {
// 	refresh(frm) {

// 	},
// });

// frappe.ui.form.on("Airplane Ticket Add-on item", {
//     amount(frm, cdt, cdn) {
//         let total = 0;

//         frm.doc.add_ons.forEach(function(d) {
//             total += d.amount;
//         });
//         total+=frm.doc.flight_price || 0;
//         frm.set_value("total_amount", total);
//     }
// });


// function assignSeat() {
//     frappe.prompt(
//         [
//             {
//                 label: 'Seat Number',
//                 fieldname: 'seatNumber',
//                 fieldtype: 'Data',
//                 reqd: 1 
//             }
//         ],
//         function(values) {

//             frappe.model.set_value('Airplane Ticket', cur_frm.docname, 'seat', values.seatNumber);
//         },
//         'Assign Seat',
//         'Save'
//     );
// }

// frappe.ui.form.on('Airplane Ticket', {
//     refresh: function(frm) {
//         frm.add_custom_button(__('Assign Seat'), assignSeat);
//     }
// });


// frappe.ui.form.on('Airplane Ticket', {
//     refresh: function(frm) {
//         frm.add_custom_button(__('Assign Seat'), function() {
//             var seat_number = prompt('Enter seat number:');
//             if (seat_number) {
//                 frm.set_value('seat', seat_number);
//             }
//         });
//     }
// });


// frappe.ui.form.on('Airplane Ticket', {
//     refresh: function(frm) {
//         // Add a custom button to the form action bar
//         frm.add_custom_button(('Assign Seat'), function() {
//             // Show a dialog with an input field for entering the seat number
//             new frappe.ui.Dialog({
//                 title: ('Enter Seat Number'),
//                 fields: [
//                     {
//                         label: ('Seat Number'),
//                         fieldname: 'seat_number',
//                         fieldtype: 'Data',
//                         reqd: true
//                     }
//                 ],
//                 primary_action_label: ('Set'),
//                 primary_action(values) {
//                     // Set the entered seat number to the 'Seat' field in the form
//                     frm.set_value('seat', values.seat_number);
//                     cur_dialog.hide();
//                 }
//             }).show();
//         }, __('Action'));
//     }
// });


frappe.ui.form.on("Airplane Ticket", {
    refresh(frm) {
        frm.add_custom_button(__('Assign Seat'), function() {
            frappe.prompt([
                {
                    fieldname: 'seat_number',
                    fieldtype: 'Data',
                    label: __('Seat Number'),
                    reqd: 1
                }
            ], function(values){
                frm.set_value('seat', values.seat_number);
            }, ('Select Seat'), ('Assign'));
        }, __("Action"));
    },
});
