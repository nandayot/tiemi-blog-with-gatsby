export default {
    fields: [
      {
        type: 'text',
        name: 'FNAME',
        label: 'Nome',
        placeholder: 'Seu nome',
        validations: 'isRequired'
      },
      {
        type: 'email',
        name: 'email',
        label: 'Email',
        placeholder: 'email.que.voce.mais@usa.com',
        validations: 'isEmail'
      },
    ],
    submit: 'Assinar'
};