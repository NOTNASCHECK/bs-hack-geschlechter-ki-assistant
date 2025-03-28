const cors = require('cors');
const express = require('express');
const router = express.Router();

// CORS aktivieren
router.use(cors());

// Beispiel-Daten
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// GET: Alle Items abrufen
router.get('/items', (req, res) => {
    res.json(items);
});

// GET: Ein Item nach ID abrufen
router.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item nicht gefunden.');
    res.json(item);
});

// POST: Ein neues Item erstellen
router.post('/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// PUT: Ein bestehendes Item aktualisieren
router.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item nicht gefunden.');

    item.name = req.body.name;
    res.json(item);
});

// DELETE: Ein Item löschen
router.delete('/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Item nicht gefunden.');

    items.splice(itemIndex, 1);
    res.status(204).send();
});

// Exportiere den Router
module.exports = router;
