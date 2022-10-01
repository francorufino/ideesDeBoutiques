document.querySelector('#contact-btn-submit').addEventListener('click', send);
function send(event) {
  event.preventDefault();
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
    .then((response) => console.log(response))
    .catch((e) => {
      alert('Oops...' + JSON.stringify(e));
    });
}
