module.exports = {
    viewDashboard: (req, res) => {
        res.render("admin/dashboard/view_dashboard");
    },

    viewBooking: (req, res) => {
        res.render("admin/booking/view_booking");
    },

    viewCategory: (req, res) => {
        res.render("admin/category/view_category");
    },

    viewBank: (req, res) => {
        res.render("admin/bank/view_bank");
    },

    viewItem: (req, res) => {
        res.render("admin/item/view_item");
    },

    // TODO: fix double url admin on viewBooking when click
};
