document.querySelector('#contact-btn-submit').addEventListener('click', send);
function send(event) {
  event.preventDefault();
  if (
    document.querySelector('#from_name').value != '' &&
    document.querySelector('#from_email').value != '' &&
    document.querySelector('#message').value != ''
  ) {
    const data = {
      service_id: 'service_b4by0oh',
      template_id: 'template_gil20qm',
      user_id: '5fU3-teBqIMEiDP_f',
      template_params: {
        from_name: document.querySelector('#from_name').value,
        to_name: 'Idees de Boutiques',
        from_email: document.querySelector('#from_email').value,
        message: document.querySelector('#message').value,
      },
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(
        (response) => (
          console.log(response),
          clearFieldsAfterSendingForm(),
          feedBackSuccess()
        ),
      )
      .catch((e) => {
        alert(
          'Oops... an error has occured, please try again' + JSON.stringify(e),
        );
      });
  } else {
    emptyFieldsMsg();
  }
}

function clearFieldsAfterSendingForm() {
  document.querySelector('#from_name').value = '';
  document.querySelector('#from_email').value = '';
  document.querySelector('#message').value = '';
}

function feedBackSuccess() {
  Toastify({
    text: 'Message sent!',
    duration: 5000,
    newWindow: true,
    close: true,
    gravity: 'bottom', // `top` or `bottom`
    position: 'center', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: '#0a396c',
      borderRadius: '12px',
      fontWeight: '700px',
      border: '4px solid #03396c',
      borderColor: 'white',
      padding: '16px 32px',
      color: 'white',
      fontSize: '1.1rem',
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

function emptyFieldsMsg() {
  Toastify({
    text: 'Please complete all the fields above',
    duration: 5000,
    newWindow: true,
    close: true,
    gravity: 'bottom', // `top` or `bottom`
    position: 'center', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: 'red',
      borderRadius: '12px',
      fontWeight: '700px',
      border: '4px solid #03396c',
      borderColor: 'white',
      padding: '16px 32px',
      color: 'white',
      fontSize: '1.1rem',
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
