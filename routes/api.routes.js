module.exports = function(app) {
    var fridgeController = require('../controllers/content.controller.js');
    app.get('/api/fridges', fridgeController.findFridges); // Get all fridges
    app.get('/api/fridges/fridge/:id', fridgeController.findSpecificFridge); // Find specific fridge based on ID
    app.get('/api/fridges/owners/:id', fridgeController.findFridgeOwners); // Find fridges relating to specific owner
    app.post('/api/fridges/entry', fridgeController.createFridgeEntry); // Create content for specific fridge
    app.post('/api/fridges/entries', fridgeController.createFridgeEntries); // Create many entries - purpose for test data
    app.post('/api/fridges/testdata', fridgeController.deleteAndCreate); // Delete current test data and create new

    app.get('/api/fridges/sorted', fridgeController.getExpirySortedList); // Sort service
};