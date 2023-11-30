function submitForm() {
  // Generare un numero di protocollo univoco e sequenziale
  const protocolNumber = Math.floor(Math.random() * 10000) + 1;

  // Recupera i dettagli della richiesta
  const complaintType = document.getElementById('complaintType').value;
  const complaintDetails = document.getElementById('complaintDetails').value;

  // Prepara il contenuto dell'e-mail
  const emailContent = `
    Numero di protocollo: ${protocolNumber}
    Data: ${new Date().toLocaleDateString('it-IT')}
    Tipo di lamentela: ${complaintType}
    Dettagli della lamentela: ${complaintDetails}
  `;

  // Invia l'e-mail utilizzando la funzione sendEmail()
  sendEmail('destinatario@email.com', 'Richiesta anonima', emailContent);
}

function sendEmail(recipient, subject, body) {
  // Utilizza un servizio di posta elettronica come SendGrid o Mailgun per inviare l'e-mail
  // Sostituisci i placeholder con le tue credenziali e impostazioni
  Email.send({
    Host: 'smtp.example.com',
    Port: 587,
    Username: 'tuo_nome_utente@email.com',
    Password: 'tua_password',
    From: 'tuo_nome_utente@email.com',
    To: recipient,
    Subject: subject,
    Body: body
  }).then(
    message => console.log('Email inviata correttamente:', message),
    error => console.error('Errore durante l\'invio dell\'e-mail:', error)
  );
}